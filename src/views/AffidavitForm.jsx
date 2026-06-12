'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import {
  Scale, Check, AlertCircle, Wallet, ChevronRight, ArrowLeft
} from 'lucide-react'
import { getStates, getDistricts } from '../data/locationData'
import { getAffidavitBySlug } from '../data/affidavitTypes'
import { submitLead } from '../lib/submitLead'
import { sendOtp, verifyOtpApi } from '../lib/otp'
import { paytmCheckout } from '../lib/paytm'

const STATES = getStates()

function Field({ label, children }) {
  return (
    <div className="pf5-field">
      <label className="pf5-lbl">{label} <span className="pf5-ast">*</span></label>
      {children}
    </div>
  )
}

function ValidInp({ valid, count, children }) {
  return (
    <div className="pf5-inp-wrap">
      {children}
      {valid && <span className="pf5-tick"><Check size={11} strokeWidth={3} /></span>}
      {count && !valid && <span className="pf5-count">{count}</span>}
    </div>
  )
}

export default function AffidavitForm() {
  const params = useParams()
  const affidavit = getAffidavitBySlug(params?.type)

  const [phase, setPhase] = useState('form') // 'form' | 'otp' | 'summary' | 'payment'
  const [error, setError] = useState('')
  const goPhase = (p) => { setPhase(p); setError('') }

  const orderId = useMemo(() => {
    const ts  = Date.now().toString()
    const rnd = Math.floor(Math.random() * 9000 + 1000)
    return 'MMD' + ts + rnd
  }, [])

  /* -- Form state -- */
  const [name,     setName]     = useState('')
  const [mobile,   setMobile]   = useState('')
  const [email,    setEmail]    = useState('')
  const [address,  setAddress]  = useState('')
  const [stateVal, setStateVal] = useState('')
  const [district, setDistrict] = useState('')
  const [pin,      setPin]      = useState('')
  const [payBusy, setPayBusy] = useState(false)


  /* -- OTP state -- */
  const [otpDigits,   setOtpDigits]   = useState(['','','',''])
  const [otpVerified, setOtpVerified] = useState(false)
  const [otpError,    setOtpError]    = useState('')
  const [resendTimer, setResendTimer] = useState(0)
  const otpRefs = useRef([])
  const otp = otpDigits.join('')

  const startResendTimer = () => {
    sendOtp(mobile).catch(() => setOtpError('Could not send OTP. Please try again.'));
    setResendTimer(30)
    const t = setInterval(() => setResendTimer(p => { if (p <= 1) { clearInterval(t); return 0 } return p - 1 }), 1000)
  }
  const verifyOtp = async () => {
    if (otp.length !== 4) { setOtpError('Please enter all 4 digits.'); return }
    const _otpRes = await verifyOtpApi(mobile, otpDigits.join(''));
    if (!_otpRes.ok) { setOtpError(_otpRes.error || 'Invalid OTP. Please try again.'); return }
    setOtpVerified(true); setOtpError(''); setError('')
    // Lead is saved now (unpaid). Paytm callback flips it to paid after payment.
    submitLead({
      orderId,
      service: 'Affidavits / Annexure',
      name,
      mobileNumber: mobile,
      email,
      address,
      district,
      state: stateVal,
      pinCode: pin,
      applyingFor: affidavit.value,
      amount: 50,
      paymentStatus: 'unpaid',
      source: 'Website',
      formData: {
        affidavitType: affidavit.value,
        state: stateVal,
        pinCode: pin,
      },
    })
    setTimeout(() => goPhase('summary'), 700)
  }
  const handleOtpDigit = (i, val) => {
    const digit = val.replace(/\D/g,'').slice(-1)
    const next = [...otpDigits]; next[i] = digit
    setOtpDigits(next); setOtpError('')
    if (digit && i < 3) setTimeout(() => otpRefs.current[i + 1]?.focus(), 10)
  }
  const handleOtpKey = (i, e) => {
    if (e.key === 'Backspace') {
      if (!otpDigits[i] && i > 0) otpRefs.current[i - 1]?.focus()
      else { const next = [...otpDigits]; next[i] = ''; setOtpDigits(next) }
    }
    if (e.key === 'ArrowLeft'  && i > 0) otpRefs.current[i - 1]?.focus()
    if (e.key === 'ArrowRight' && i < 3) otpRefs.current[i + 1]?.focus()
  }
  const handleOtpPaste = (e) => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g,'').slice(0, 4)
    if (pasted) {
      const next = pasted.split('').concat(['','','','']).slice(0, 4)
      setOtpDigits(next); setOtpError('')
      setTimeout(() => otpRefs.current[Math.min(pasted.length, 3)]?.focus(), 10)
      e.preventDefault()
    }
  }

  useEffect(() => {
    if (phase === 'otp') { setOtpDigits(['','','','']); setOtpVerified(false); setOtpError(''); startResendTimer() }
  }, [phase])

  // Unknown affidavit slug — keep hooks above this so their order is stable
  if (!affidavit) {
    return (
      <div className="pf5-page">
        <div className="pf5-card">
          <div className="pf5-icon-wrap">
            <div className="pf5-icon" style={{ background: 'linear-gradient(135deg,#DC2626,#B91C1C)' }}>
              <AlertCircle size={26} strokeWidth={1.8} color="#fff" />
            </div>
          </div>
          <h2 className="pf5-title">Affidavit Not Found</h2>
          <p className="pf5-sub">We couldn&apos;t find that affidavit type. Please choose one from the list.</p>
          <div className="pf5-footer">
            <Link href="/affidavits" className="pf5-cta-btn" style={{ textDecoration: 'none' }}>
              Back to Affidavits <ChevronRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  /* -- Validation -- */
  const validate = () => {
    if (!name.trim()) return 'Please enter your full name.'
    if (!/^[6-9]\d{9}$/.test(mobile)) return 'Please enter a valid 10-digit Indian mobile number.'
    if (!/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email)) return 'Please enter a valid email address.'
    if (!address.trim()) return 'Please enter your address.'
    if (!stateVal) return 'Please select your state.'
    if (!district) return 'Please select your district.'
    if (!/^[1-9]\d{5}$/.test(pin)) return 'Please enter a valid 6-digit pin code.'
    return ''
  }

  const next = () => {
    const e = validate()
    if (e) { setError(e); return }
    goPhase('otp')
  }

  const submitPayment = async () => {
    if (payBusy) return
    setError(''); setPayBusy(true)
    const r = await paytmCheckout({
      orderId, amount: 50, service: "Affidavits / Annexure", mobile, name,
    })
    if (!r.ok) { setError(r.error || 'Could not start payment.'); setPayBusy(false) }
  }

  /* -- Payment success -- */
  /* -- Payment page -- */
  if (phase === 'payment') {
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
          <p className="pf5-sub">Secure checkout · ₹50 all-inclusive</p>

          <div className="pf5-content">
            <div className="pf5-pay-banner">
              <span className="pf5-pay-label">Total Payable</span>
              <span className="pf5-pay-amount">₹50</span>
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
              <Check size={15} /> {payBusy ? 'Redirecting…' : `Pay ₹50 with Paytm`}
            </button>
          </div>

        </div>
      </div>
    )
  }

  /* -- OTP page -- */
  if (phase === 'otp') {
    return (
      <div className="pf5-page">
        <div className="pf5-card">
          <div className="pf5-head-top">
            <button className="pf5-close-btn" onClick={() => goPhase('form')}>
              <ArrowLeft size={16} strokeWidth={2} />
            </button>
            <span className="pf5-phase-lbl">OTP Verification</span>
            <div style={{ width: 32 }} />
          </div>
          {otpVerified ? (
            <div className="pf5-otp-ok"><Check size={15} strokeWidth={2.5} /> Mobile verified! Redirecting...</div>
          ) : (
            <div className="pf5-otp-body">
              <div className="pf5-otp-target">
                OTP sent to <span className="pf5-otp-num">+91 ******{mobile.slice(-4)}</span>
              </div>
              <label className="pf5-otp-lbl">Enter OTP <span className="pf5-ast">*</span></label>
              <div className="pf5-otp-boxes" onPaste={handleOtpPaste}>
                {otpDigits.map((d, i) => (
                  <input key={i} ref={el => otpRefs.current[i] = el}
                    className={`pf5-otp-box${d ? ' filled' : ''}`}
                    type="text" inputMode="numeric" maxLength={1} value={d}
                    onChange={e => handleOtpDigit(i, e.target.value)}
                    onKeyDown={e => handleOtpKey(i, e)}
                    onFocus={e => e.target.select()} />
                ))}
              </div>
              {otpError && <p className="pf5-otp-err">{otpError}</p>}
              <p className="pf5-otp-resend-txt">
                Not Received?{' '}
                {resendTimer > 0
                  ? <span>Resend in {resendTimer}s</span>
                  : <button className="pf5-otp-resend-link" onClick={startResendTimer}>Resend OTP</button>
                }
              </p>
              <button className="pf5-otp-verify-btn" onClick={verifyOtp}>Verify</button>
            </div>
          )}
        </div>
      </div>
    )
  }

  /* -- Summary page -- */
  if (phase === 'summary') {
    return (
      <div className="pf5-page">
        <div className="pf5-summary-card">
          <h2 className="pf5-summary-title">Thank You for Your Submission!</h2>
          <p className="pf5-summary-sub">Please review your details before proceeding to payment.</p>
          <div className="pf5-summary-rows">
            {[
              { label: 'Name',                 value: name             },
              { label: 'Mobile Number',        value: mobile           },
              { label: 'Order ID',             value: orderId          },
              { label: 'Services',             value: affidavit.value  },
              { label: 'Amount (Booking Fee)', value: '₹50'            },
            ].map(({ label, value }) => (
              <div key={label} className="pf5-summary-row">
                <span className="pf5-summary-lbl">{label}:</span>
                <div className="pf5-summary-val">{value}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12.5, color: 'var(--ink3)', textAlign: 'center', marginBottom: 16 }}>
            You can pay the balance amount post documents verification by our consultant.
          </p>
          <button className="pf5-proceed-btn" onClick={submitPayment} disabled={payBusy}>
            {payBusy ? 'Redirecting…' : (<>Proceed to Pay <ChevronRight size={18} /></>)}
          </button>
          <button className="pf5-back-link" style={{ marginTop: 8 }} onClick={() => goPhase('otp')}>
            <ArrowLeft size={13} /> Back
          </button>
        </div>
      </div>
    )
  }

  /* -- Main form -- */
  return (
    <div className="pf5-page">
      <div className="pf5-breadcrumb">
        <Link href="/">Home</Link><span> / </span><Link href="/affidavits">Affidavits</Link><span> / </span><span>Form</span>
      </div>
      <div className="pf5-card">

        <div className="pf5-head-top">
          <Link href="/affidavits" className="pf5-close-btn" aria-label="Back to affidavits">
            <ArrowLeft size={16} strokeWidth={2} />
          </Link>
          <div style={{ width: 32 }} />
        </div>

        <div className="pf5-icon-wrap">
          <div className="pf5-icon" style={{ background: 'linear-gradient(135deg,#1A3D6E,#2E68B1)' }}>
            <Scale size={26} strokeWidth={1.8} color="#fff" />
          </div>
        </div>

        <h2 className="pf5-title">{affidavit.value}</h2>
        <p className="pf5-sub">Enter your details and our experts will prepare your affidavit.</p>

        <div className="pf5-content">
          <Field label="Full Name">
            <ValidInp valid={name.trim().length > 0}>
              <input className="pf5-inp" type="text" placeholder="Enter your full name"
                value={name} onChange={e => { setName(e.target.value); setError('') }} />
            </ValidInp>
          </Field>

          <Field label="Address">
            <ValidInp valid={address.trim().length > 0}>
              <input className="pf5-inp" type="text" placeholder="Enter your address"
                value={address} onChange={e => { setAddress(e.target.value); setError('') }} />
            </ValidInp>
          </Field>

          <Field label="State">
            <ValidInp valid={stateVal !== ''}>
              <select className="pf5-inp" value={stateVal}
                onChange={e => { setStateVal(e.target.value); setDistrict(''); setError('') }}>
                <option value="">Select state</option>
                {STATES.map(s => <option key={s}>{s}</option>)}
              </select>
            </ValidInp>
          </Field>

          <Field label="District">
            <ValidInp valid={district !== ''}>
              <select className="pf5-inp" value={district} disabled={!stateVal}
                onChange={e => { setDistrict(e.target.value); setError('') }}
                style={!stateVal ? { opacity: .5, cursor: 'not-allowed' } : {}}>
                <option value="">{stateVal ? 'Select district' : 'Select state first'}</option>
                {getDistricts(stateVal).map(d => <option key={d}>{d}</option>)}
              </select>
            </ValidInp>
          </Field>

          <Field label="Pin Code">
            <ValidInp valid={/^[1-9]\d{5}$/.test(pin)} count={pin.length > 0 && pin.length < 6 ? `${pin.length}/6` : null}>
              <input className="pf5-inp" type="text" placeholder="6-digit pin code" maxLength={6}
                value={pin} onChange={e => { setPin(e.target.value.replace(/\D/g, '')); setError('') }} />
            </ValidInp>
          </Field>

          <Field label="Email Address">
            <ValidInp valid={/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email)}>
              <input className="pf5-inp" type="email" placeholder="you@example.com"
                value={email} onChange={e => { setEmail(e.target.value); setError('') }} />
            </ValidInp>
          </Field>

          <Field label="Mobile Number">
            <ValidInp valid={/^[6-9]\d{9}$/.test(mobile)} count={mobile.length > 0 && mobile.length < 10 ? `${mobile.length}/10` : null}>
              <input className="pf5-inp" type="tel" placeholder="10-digit mobile number" maxLength={10}
                value={mobile} onChange={e => { setMobile(e.target.value.replace(/\D/g, '')); setError('') }} />
            </ValidInp>
          </Field>

          <p className="pf5-toc">
            By clicking submit, you agree to our{' '}
            <Link href="/terms-conditions">Terms &amp; Conditions</Link> and{' '}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
        </div>

        {error && <div className="pf5-error"><AlertCircle size={14} strokeWidth={2} /> {error}</div>}

        <div className="pf5-footer">
          <button className="pf5-cta-btn" onClick={next}>
            Submit <ChevronRight size={17} />
          </button>
        </div>

      </div>
    </div>
  )
}
