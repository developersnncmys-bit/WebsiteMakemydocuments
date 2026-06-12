// One-shot codemod: convert each service form from the simulated 3-tab payment
// UI to a single Paytm button, and move the submitLead call from after-payment
// to OTP-success (paymentStatus: 'unpaid' — the Paytm callback flips it to
// 'paid' later).
//
// Run: node scripts/paytm-codemod.cjs
//
// Safe to re-run: each transform looks for the original (pre-codemod) marker
// and is a no-op if the file has already been migrated.

const fs = require("fs");
const path = require("path");

const VIEWS_DIR = path.join(__dirname, "..", "src", "views");
const SKIP = new Set([
  // Already migrated by hand as the reference implementation.
  "PanCardForm.jsx",
]);

const FORMS = fs
  .readdirSync(VIEWS_DIR)
  .filter((f) => /Form\.jsx$/.test(f) && !SKIP.has(f));

const isPaidForm = (src) =>
  src.includes("phase === 'payment'") &&
  src.includes("setPayDone") &&
  src.includes("submitLead(");

// ----- brace-balanced helpers -----------------------------------------------

// Locate the substring starting at `startRegex` whose body is wrapped in
// `{ ... }` (balanced). Returns { start, end } indices into src, where `end`
// is exclusive and points just after the matching `}`. Returns null if no
// match.
function balancedBlock(src, startRegex) {
  const m = startRegex.exec(src);
  if (!m) return null;
  let i = src.indexOf("{", m.index);
  if (i < 0) return null;
  let depth = 0;
  let inStr = null; // ' " ` or null
  let inLineCmt = false;
  let inBlockCmt = false;
  for (; i < src.length; i++) {
    const c = src[i];
    const n = src[i + 1];
    if (inLineCmt) {
      if (c === "\n") inLineCmt = false;
      continue;
    }
    if (inBlockCmt) {
      if (c === "*" && n === "/") { inBlockCmt = false; i++; }
      continue;
    }
    if (inStr) {
      if (c === "\\") { i++; continue; }
      if (c === inStr) inStr = null;
      continue;
    }
    if (c === "/" && n === "/") { inLineCmt = true; i++; continue; }
    if (c === "/" && n === "*") { inBlockCmt = true; i++; continue; }
    if (c === "'" || c === '"' || c === "`") { inStr = c; continue; }
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) return { start: m.index, end: i + 1 };
    }
  }
  return null;
}

// Same as balancedBlock but the wrapper is `( ... )` (JSX return blocks).
function balancedParen(src, startRegex) {
  const m = startRegex.exec(src);
  if (!m) return null;
  let i = src.indexOf("(", m.index);
  if (i < 0) return null;
  let depth = 0;
  let inStr = null, inLineCmt = false, inBlockCmt = false;
  for (; i < src.length; i++) {
    const c = src[i], n = src[i + 1];
    if (inLineCmt) { if (c === "\n") inLineCmt = false; continue; }
    if (inBlockCmt) { if (c === "*" && n === "/") { inBlockCmt = false; i++; } continue; }
    if (inStr) { if (c === "\\") { i++; continue; } if (c === inStr) inStr = null; continue; }
    if (c === "/" && n === "/") { inLineCmt = true; i++; continue; }
    if (c === "/" && n === "*") { inBlockCmt = true; i++; continue; }
    if (c === "'" || c === '"' || c === "`") { inStr = c; continue; }
    if (c === "(") depth++;
    else if (c === ")") {
      depth--;
      if (depth === 0) return { start: m.index, end: i + 1 };
    }
  }
  return null;
}

// Remove `src.slice(start, end)` plus the immediately following newline.
function cut(src, start, end) {
  let e = end;
  while (e < src.length && (src[e] === "\n" || src[e] === "\r")) e++;
  // Also drop any leading whitespace-only run on the same line as `start`.
  let s = start;
  while (s > 0 && src[s - 1] !== "\n" && /\s/.test(src[s - 1])) s--;
  return src.slice(0, s) + src.slice(e);
}

// Extract the submitLead({ ... }) call AND the `})` semicolon block from inside
// the submitPayment function. Returns the literal call (without leading
// whitespace) so we can re-emit it in verifyOtp.
function extractSubmitLead(src, submitPaymentRange) {
  const region = src.slice(submitPaymentRange.start, submitPaymentRange.end);
  const callMatch = /submitLead\s*\(\s*\{/.exec(region);
  if (!callMatch) return null;
  // Find the closing `})` of submitLead({...})
  // Scan from callMatch.index for balanced braces, starting at the `{`.
  let i = region.indexOf("{", callMatch.index);
  let depth = 0;
  let inStr = null, inLineCmt = false, inBlockCmt = false;
  for (; i < region.length; i++) {
    const c = region[i], n = region[i + 1];
    if (inLineCmt) { if (c === "\n") inLineCmt = false; continue; }
    if (inBlockCmt) { if (c === "*" && n === "/") { inBlockCmt = false; i++; } continue; }
    if (inStr) { if (c === "\\") { i++; continue; } if (c === inStr) inStr = null; continue; }
    if (c === "/" && n === "/") { inLineCmt = true; i++; continue; }
    if (c === "/" && n === "*") { inBlockCmt = true; i++; continue; }
    if (c === "'" || c === '"' || c === "`") { inStr = c; continue; }
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) {
        // expect `)` next (skipping ws)
        let j = i + 1;
        while (j < region.length && /\s/.test(region[j])) j++;
        if (region[j] !== ")") return null;
        const callStart = callMatch.index;
        const callEnd = j + 1; // exclusive
        return {
          text: region.slice(callStart, callEnd), // submitLead({...})
        };
      }
    }
  }
  return null;
}

// Try to pull the service name + amount out of an extracted submitLead call.
function parseSubmitLead(callText) {
  // service: 'X' or "X"
  const svcM = /service\s*:\s*(['"])([^'"]+)\1/.exec(callText);
  // amount: 350  (preserve template strings / expressions verbatim — only
  // capture simple numeric literals; other forms keep their dynamic expressions
  // for both the price field and PRICE_EXPR.)
  const amtM = /amount\s*:\s*([\d.]+)/.exec(callText);
  return {
    service: svcM ? svcM[2] : null,
    amount: amtM ? amtM[1] : null,
  };
}

// ----- the transform --------------------------------------------------------

function transform(src, file) {
  let changed = false;

  // 1. Add paytmCheckout import right after the otp import.
  if (
    !src.includes("paytmCheckout") &&
    /import \{ sendOtp, verifyOtpApi \} from ['"]\.\.\/lib\/otp['"]/.test(src)
  ) {
    src = src.replace(
      /(import \{ sendOtp, verifyOtpApi \} from ['"]\.\.\/lib\/otp['"]\r?\n)/,
      `$1import { paytmCheckout } from '../lib/paytm'\n`
    );
    changed = true;
  }

  // 2. Drop the BANKS constant.
  if (/^const BANKS\s*=.*$/m.test(src)) {
    src = src.replace(/^const BANKS\s*=.*\r?\n/m, "");
    changed = true;
  }

  // 3. Replace the payment-state state block with a single payBusy flag.
  // The block spans from `const [payMethod, setPayMethod] = useState('upi')`
  // through `const [payDone, setPayDone] = useState(false)`. Whitespace is
  // permissive — different forms use different alignment.
  {
    const re =
      /(\s*\/\*[^\n]*?Payment[^\n]*?\*\/\r?\n)?[ \t]*const \[payMethod,\s+setPayMethod\]\s*=\s*useState\(['"]upi['"]\)\r?\n[\s\S]*?const \[payDone,\s+setPayDone\]\s*=\s*useState\(false\)\r?\n/;
    if (re.test(src)) {
      src = src.replace(re, `\n  const [payBusy, setPayBusy] = useState(false)\n`);
      changed = true;
    }
  }

  // 4. Drop the fmtCard / fmtExp helpers.
  src = src.replace(/^[ \t]*const fmtCard\s*=.*\r?\n/m, () => { changed = true; return ""; });
  src = src.replace(/^[ \t]*const fmtExp\s*=.*\r?\n/m, () => { changed = true; return ""; });

  // 5. Drop the validatePayment function.
  {
    const blk = balancedBlock(src, /const validatePayment\s*=\s*\(\)\s*=>\s*\{/);
    if (blk) {
      src = cut(src, blk.start, blk.end);
      changed = true;
    }
  }

  // 6. Rewrite submitPayment to call paytmCheckout, AND extract its submitLead
  //    payload so we can re-emit it in verifyOtp.
  let extractedSubmitLead = null;
  {
    const blk = balancedBlock(src, /const submitPayment\s*=\s*\(\)\s*=>\s*\{/);
    if (blk) {
      const extracted = extractSubmitLead(src, blk);
      if (!extracted) {
        console.warn(`! ${file}: could not extract submitLead from submitPayment`);
      } else {
        extractedSubmitLead = extracted;
        const { service, amount } = parseSubmitLead(extracted.text);
        const serviceLit = service ? JSON.stringify(service) : "''";
        const amountExpr = amount || "0";
        const replacement =
`const submitPayment = async () => {
    if (payBusy) return
    setError(''); setPayBusy(true)
    const r = await paytmCheckout({
      orderId, amount: ${amountExpr}, service: ${serviceLit}, mobile, name,
    })
    if (!r.ok) { setError(r.error || 'Could not start payment.'); setPayBusy(false) }
  }`;
        src = src.slice(0, blk.start) + replacement + src.slice(blk.end);
        changed = true;
      }
    }
  }

  // 7. Drop the `if (payDone) { return (...) }` block.
  {
    const blk = balancedBlock(src, /if \(payDone\)\s*\{/);
    if (blk) {
      // Also eat a preceding `// -- Payment success --` comment line.
      let s = blk.start;
      const prevLineStart = src.lastIndexOf("\n", s - 2) + 1;
      const prevLine = src.slice(prevLineStart, s).trim();
      if (/^\/\/.*Payment success/.test(prevLine)) s = prevLineStart;
      src = cut(src, s, blk.end);
      changed = true;
    }
  }

  // 8. Replace the `if (phase === 'payment') { return (...) }` block with a
  //    Paytm-only card.
  {
    const blk = balancedBlock(src, /if \(phase === ['"]payment['"]\)\s*\{/);
    if (blk) {
      // Re-extract service+amount from the now-rewritten submitPayment call so
      // the visible price matches what we'll actually charge.
      const region = src.slice(0, blk.start);
      const amtM = /amount:\s*([\d.]+)/.exec(region.slice(region.lastIndexOf("paytmCheckout")));
      const amountExpr = amtM ? amtM[1] : "0";
      const replacement =
`if (phase === 'payment') {
    return (
      <div className="pf5-page">
        <div className="pf5-card">

          <div className="pf5-head-top">
            <button className="pf5-close-btn" onClick={() => { goPhase('summary'); setError('') }}>
              <ArrowLeft size={16} strokeWidth={2} />
            </button>
            <span className="pf5-phase-lbl">Secure Payment</span>
            <div style={{ width: 32 }} />
          </div>

          <div className="pf5-icon-wrap">
            <div className="pf5-icon" style={{ background: 'linear-gradient(135deg,#16A34A,#15803D)' }}>
              <Wallet size={26} strokeWidth={1.8} color="#fff" />
            </div>
          </div>

          <h2 className="pf5-title">Complete Payment</h2>
          <p className="pf5-sub">Secure checkout · ₹${amountExpr} all-inclusive</p>

          <div className="pf5-content">
            <div className="pf5-pay-banner">
              <span className="pf5-pay-label">Total Payable</span>
              <span className="pf5-pay-amount">₹${amountExpr}</span>
              <span className="pf5-pay-note">All charges included · No hidden fees</span>
            </div>
            <p className="pf5-secure" style={{ marginTop: 18 }}>
              You will be redirected to Paytm to complete your payment securely.
            </p>
          </div>

          {error && <div className="pf5-error"><AlertCircle size={14} strokeWidth={2} /> {error}</div>}

          <div className="pf5-footer">
            <p className="pf5-legal">
              By clicking Pay, you accept our <Link href="/terms-conditions">Terms</Link> and <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>
            <button className="pf5-cta-btn pf5-pay" onClick={submitPayment} disabled={payBusy}>
              <Check size={15} /> {payBusy ? 'Redirecting…' : \`Pay ₹${amountExpr} with Paytm\`}
            </button>
          </div>

        </div>
      </div>
    )
  }`;
      src = src.slice(0, blk.start) + replacement + src.slice(blk.end);
      changed = true;
    }
  }

  // 9. Inject the extracted submitLead({...}) into verifyOtp, BEFORE
  //    `setTimeout(() => goPhase('summary'), ...)`. Flip paymentStatus to
  //    'unpaid' so the Paytm callback owns the paid-state transition.
  if (extractedSubmitLead) {
    let payload = extractedSubmitLead.text
      .replace(/paymentStatus\s*:\s*(['"])paid\1/, "paymentStatus: 'unpaid'");

    // Re-indent the payload to sit under verifyOtp's body (4-space indent).
    payload = payload.split("\n").map((ln, idx) => idx === 0 ? ln : "    " + ln.replace(/^\s+/, "")).join("\n");
    // Actually, the simplest robust approach: leave indentation alone — the
    // payload's existing indentation already matches its original siblings in
    // submitPayment (which was indented two spaces inside the function). Inject
    // verbatim with a `    ` prefix on the first line only.
    payload = extractedSubmitLead.text.replace(/paymentStatus\s*:\s*(['"])paid\1/, "paymentStatus: 'unpaid'");

    const verifyBlk = balancedBlock(src, /const verifyOtp\s*=\s*async\s*\(\)\s*=>\s*\{/);
    if (verifyBlk) {
      const body = src.slice(verifyBlk.start, verifyBlk.end);
      const setTOMatch = /setTimeout\(\(\)\s*=>\s*goPhase\(['"]summary['"]\)/.exec(body);
      if (setTOMatch) {
        // Inject immediately before the setTimeout line; mirror the indentation
        // of that line.
        const lineStart = body.lastIndexOf("\n", setTOMatch.index) + 1;
        const indent = /^[ \t]*/.exec(body.slice(lineStart))[0];
        const inject =
`${indent}// Lead is saved now (unpaid). Paytm callback flips it to paid after payment.\n${indent}${payload}\n`;
        const insertAt = verifyBlk.start + lineStart;
        src = src.slice(0, insertAt) + inject + src.slice(insertAt);
        changed = true;
      }
    }
  }

  // 10. Trim the lucide-react import: drop IndianRupee, Building2 (and
  //     CreditCard if it isn't used elsewhere). Keep Wallet because the new
  //     payment-phase card still renders it.
  {
    const lucideRe = /import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"]/;
    const m = lucideRe.exec(src);
    if (m) {
      const names = m[1]
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      const drop = new Set(["IndianRupee", "Building2"]);
      // Drop CreditCard only if no other usage in the file outside the import.
      const after = src.slice(m.index + m[0].length);
      if (!/\bCreditCard\b/.test(after)) drop.add("CreditCard");
      const kept = names.filter((n) => !drop.has(n));
      if (kept.length !== names.length) {
        const rebuilt = `import {\n  ${kept.join(", ")}\n} from 'lucide-react'`;
        src = src.slice(0, m.index) + rebuilt + src.slice(m.index + m[0].length);
        changed = true;
      }
    }
  }

  return { src, changed };
}

let touched = 0, skipped = 0, failed = 0;
for (const file of FORMS) {
  const full = path.join(VIEWS_DIR, file);
  const orig = fs.readFileSync(full, "utf8");
  if (!isPaidForm(orig)) { skipped++; continue; }
  try {
    const { src, changed } = transform(orig, file);
    if (changed) {
      fs.writeFileSync(full, src);
      console.log(`✓ ${file}`);
      touched++;
    } else {
      console.log(`= ${file} (no change)`);
      skipped++;
    }
  } catch (err) {
    console.error(`✗ ${file}:`, err.message);
    failed++;
  }
}
console.log(`\nDone. touched=${touched} skipped=${skipped} failed=${failed}`);
