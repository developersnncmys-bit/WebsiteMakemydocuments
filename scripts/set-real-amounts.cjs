// One-off codemod: replace the ₹10 placeholder booking fee in every payment
// form with the real per-service amount taken from each service's landing page.
// Charged value (`amount:`) + all ₹10 display labels are updated together.
const fs = require('fs');
const path = require('path');

const VIEWS = path.join(__dirname, '..', 'src', 'views');

// filename -> online amount (₹). Insurance forms are quote-only (no payment).
const AMOUNTS = {
  'PassportForm.jsx': 99,
  'MsmeRegistrationForm.jsx': 99,
  'PoliceClearanceCertificateForm.jsx': 99,
  'PoliceVerificationForm.jsx': 99,
  'AffidavitForm.jsx': 50,
  'RentalAgreementForm.jsx': 50,
  'LeaseAgreementForm.jsx': 50,
  'PanCardForm.jsx': 350,
  'SeniorCitizenCardForm.jsx': 300,
  // Tourist visas — all ₹99 booking fee.
  'UaeVisaForm.jsx': 99,
  'UKVisaForm.jsx': 99,
  'AustraliaVisaForm.jsx': 99,
  'MalaysiaVisaForm.jsx': 99,
  'SingaporeVisaForm.jsx': 99,
  'EgyptVisaForm.jsx': 99,
  'VietnamVisaForm.jsx': 99,
  'HongKongVisaForm.jsx': 99,
  'IndonesiaVisaForm.jsx': 99,
  'AzerbaijanVisaForm.jsx': 99,
  'OmanVisaForm.jsx': 99,
  'MoroccoVisaForm.jsx': 99,
  'BahrainVisaForm.jsx': 99,
  'QatarVisaForm.jsx': 99,
  'RussiaVisaForm.jsx': 99,
  'UzbekistanVisaForm.jsx': 99,
};

let totalFiles = 0;
let totalReplacements = 0;

for (const [file, amount] of Object.entries(AMOUNTS)) {
  const p = path.join(VIEWS, file);
  if (!fs.existsSync(p)) { console.error('MISSING:', file); continue; }
  let src = fs.readFileSync(p, 'utf8');
  const before = src;
  let n = 0;

  // 1) charged value: `amount: 10` (in submitLead + submitPayment)
  src = src.replace(/amount:\s*10\b/g, (m) => { n++; return `amount: ${amount}`; });
  // 2) every ₹10 display label (\b stops it from touching ₹100 etc.)
  src = src.replace(/₹10\b/g, () => { n++; return `₹${amount}`; });

  if (src !== before) {
    fs.writeFileSync(p, src, 'utf8');
    totalFiles++;
    totalReplacements += n;
    console.log(`${file}: ₹${amount}  (${n} replacements)`);
  } else {
    console.log(`${file}: no ₹10 found (already updated?)`);
  }
}

console.log(`\nDone: ${totalReplacements} replacements across ${totalFiles} files.`);
