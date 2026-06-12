'use client'

import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { User, Phone, FileText, MapPin, ChevronRight, ShieldCheck, Check, AlertCircle } from 'lucide-react'
import { submitLead } from '../lib/submitLead'
import { getStates, getDistricts } from '../data/locationData'

const STATES = getStates()

const STEPS = [
  {
    n: 1,
    h4:   'Search & Select Your Document',
    desc: 'Use the search bar or click a service. Know instantly what you need, the cost, and timeline.',
  },
  {
    n: 2,
    h4:   'Fill the Quick Form – Takes 2 Minutes',
    desc: 'Tell us your name, contact, and the document you need. We do the rest.',
  },
  {
    n: 3,
    h4:   'We Call You Within 30 Minutes',
    desc: 'A dedicated case manager contacts you, explains the process, and kicks off your application.',
  },
  {
    n: 4,
    h4:   'Track on WhatsApp. Receive at Door.',
    desc: 'Real-time WhatsApp updates throughout. Your document delivered to your doorstep – zero trips required.',
  },
]

// Canonical 11 backend services — mirrored across the home form (here),
// ContactUs.jsx, BlogDetail.jsx contact form, and the admin's
// lib/constants.ts. These labels match the admin's getSchema() routing so
// every lead lands in the right per-service pipeline.
const SERVICES = [
  'Passport',
  'PAN Card',
  'Tourist Visa',
  'Senior Citizen Card',
  'Rental Agreement',
  'Lease Agreement',
  'MSME Registration',
  'Insurance',
  'Police Clearance Certificate (PCC)',
  'Police Verification Certificate (PVC)',
  'Affidavits / Annexure',
]

export default function Solution() {
  const [name,      setName]      = useState('')
  const [mobile,    setMobile]    = useState('')
  const [service,   setService]   = useState('')
  const [stateVal,  setStateVal]  = useState('')
  const [district,  setDistrict]  = useState('')
  const [pincode,   setPincode]   = useState('')
  const [error,     setError]     = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async () => {
    if (submitting || submitted) return
    if (!name.trim()) { setError('Please enter your full name.'); return }
    if (!/^[6-9]\d{9}$/.test(mobile)) { setError('Please enter a valid 10-digit mobile number.'); return }
    if (!service) { setError('Please select a service.'); return }
    if (!stateVal) { setError('Please select your state.'); return }
    if (!district) { setError('Please select your district.'); return }
    if (!/^[1-9]\d{5}$/.test(pincode)) { setError('Please enter a valid 6-digit pin code.'); return }
    setError('')
    setSubmitting(true)
    await submitLead({
      service,
      name,
      mobileNumber: mobile,
      state: stateVal,
      district,
      pinCode: pincode,
      amount: 0,
      paymentStatus: 'unpaid',
      source: 'Home – Stop Searching',
      formData: {
        enquiryService: service,
        state: stateVal,
        pinCode: pincode,
        source: 'Home Page – Stop Searching Form',
      },
    })
    setSubmitting(false)
    setName('')
    setMobile('')
    setService('')
    setStateVal('')
    setDistrict('')
    setPincode('')
    setSubmitted(true)
  }

  return (
    <section className="solution" id="apply">
      <div className="mx">
        <div className="sol-layout">

          {/* LEFT */}
          <div className="rv-l">
            <div className="eyebrow">Your Final Solution</div>
            <h2>Stop Searching.<br />Start Here. End Here.</h2>
            <p className="sec-desc">
              Everything you need to get any Indian document – first question to final delivery –
              handled completely under one roof.
            </p>
            <div className="sol-steps">
              {STEPS.map(({ n, h4, desc }) => (
                <div key={n} className="sol-step">
                  <div className="sol-connector" />
                  <div className="sol-n">{n}</div>
                  <div>
                    <h4>{h4}</h4>
                    <p style={{ fontSize: 13.5, color: 'var(--ink3)', lineHeight: 1.65, marginTop: 4 }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – form */}
          <div className="pf-sidebar rv-r">

            {/* Header */}
            <div className="pf-sidebar-head">
              <div className="pf-sidebar-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                Free Callback
              </div>
              <h3 className="pf-sidebar-title">Apply in 2 Minutes</h3>
              <p className="pf-sidebar-sub">Our team will contact you within 30 minutes</p>
            </div>

            {/* Fields */}
            <div className="pf-sidebar-body">
              <div className="pf-sb-field">
                <label className="pf-sb-lbl">
                  <User size={13} strokeWidth={2} /> Full Name *
                </label>
                <input className="pf-sb-inp" type="text" placeholder="Your full name"
                  value={name} onChange={e => { setName(e.target.value); if (error) setError('') }}
                  disabled={submitted} />
              </div>

              <div className="pf-sb-field">
                <label className="pf-sb-lbl">
                  <Phone size={13} strokeWidth={2} /> Mobile Number *
                </label>
                <input className="pf-sb-inp" type="tel" placeholder="10-digit mobile number"
                  value={mobile} maxLength={10} inputMode="numeric"
                  onChange={e => { setMobile(e.target.value.replace(/\D/g, '').slice(0, 10)); if (error) setError('') }}
                  disabled={submitted} />
              </div>

              <div className="pf-sb-field">
                <label className="pf-sb-lbl">
                  <FileText size={13} strokeWidth={2} /> Document Required *
                </label>
                <select className="pf-sb-inp pf-sb-sel"
                  value={service} onChange={e => { setService(e.target.value); if (error) setError('') }}
                  disabled={submitted}>
                  <option value="" disabled>Select a service…</option>
                  {SERVICES.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              <div className="pf-sb-field">
                <label className="pf-sb-lbl">
                  <MapPin size={13} strokeWidth={2} /> State *
                </label>
                <select className="pf-sb-inp pf-sb-sel"
                  value={stateVal}
                  onChange={e => { setStateVal(e.target.value); setDistrict(''); if (error) setError('') }}
                  disabled={submitted}>
                  <option value="">Select your state…</option>
                  {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="pf-sb-field">
                <label className="pf-sb-lbl">
                  <MapPin size={13} strokeWidth={2} /> District *
                </label>
                <select className="pf-sb-inp pf-sb-sel"
                  value={district}
                  onChange={e => { setDistrict(e.target.value); if (error) setError('') }}
                  disabled={submitted || !stateVal}
                  style={!stateVal ? { opacity: .5, cursor: 'not-allowed' } : {}}>
                  <option value="">{stateVal ? 'Select your district…' : 'Select state first'}</option>
                  {getDistricts(stateVal).map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>

              <div className="pf-sb-field">
                <label className="pf-sb-lbl">
                  <MapPin size={13} strokeWidth={2} /> Pin Code *
                </label>
                <input className="pf-sb-inp" type="text" inputMode="numeric" maxLength={6}
                  placeholder="6-digit pin code"
                  value={pincode}
                  onChange={e => { setPincode(e.target.value.replace(/\D/g, '').slice(0, 6)); if (error) setError('') }}
                  disabled={submitted} />
              </div>

              {error && (
                <div style={{
                  background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c',
                  padding: '8px 12px', borderRadius: 8, fontSize: 12.5,
                  display: 'flex', alignItems: 'center', gap: 6, marginTop: -4,
                }}>
                  <AlertCircle size={13} strokeWidth={2} /> {error}
                </div>
              )}

              <button
                className="pf-sb-submit"
                onClick={handleSubmit}
                disabled={submitting || submitted}
                style={submitted ? { background: 'var(--green)', boxShadow: 'none' } : {}}
              >
                {submitted ? (
                  <><Check size={16} strokeWidth={2.5} /> Submitted! We'll call you shortly.</>
                ) : submitting ? (
                  <>Submitting…</>
                ) : (
                  <>Submit <ChevronRight size={16} strokeWidth={2.5} /></>
                )}
              </button>

              <div className="pf-sb-lock">
                <ShieldCheck size={13} strokeWidth={2} color="var(--green)" />
                Your details are 100% safe with us
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
