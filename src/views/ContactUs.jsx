'use client'

import { useState } from 'react'
import {
  Phone, Clock, MapPin, Send, CheckCircle2,
  User, Mail, Smartphone, ChevronDown, Zap, Star, Users, MessageSquare,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import useScrollReveal from '../hooks/useScrollReveal'
import { submitLead } from '../lib/submitLead'
import { getStates, getDistricts } from '../data/locationData'

const ALL_STATES = getStates()

// Canonical 11 backend services — mirrored across Solution.jsx,
// BlogDetail.jsx contact form, and the admin's lib/constants.ts.
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

const INFO = [
  {
    Icon: Phone, label: 'Call Us',
    lines: ['+91 94296 90973'],
    color: 'var(--amber)', bg: 'rgba(247,164,24,.18)', border: 'rgba(247,164,24,.35)',
  },
  {
    Icon: Mail, label: 'Email Us',
    lines: ['support@makemydocuments.com'],
    sub: 'We reply within 24 hours',
    color: 'var(--teal-dk)', bg: 'rgba(20,184,166,.18)', border: 'rgba(20,184,166,.35)',
  },
  {
    Icon: Clock, label: 'Office Timings',
    lines: ['Mon – Fri  ·  10am – 05pm', 'Sat  ·  10am – 01pm'],
    color: '#34d399', bg: 'rgba(52,211,153,.18)', border: 'rgba(52,211,153,.35)',
  },
  {
    Icon: MapPin, label: 'Visit Us',
    lines: [],
    sub: 'No 334, 2nd Main, Dattatraya Nagar, Hosakerehalli BSK 3rd Stage, Bangalore 560085',
    color: '#f87171', bg: 'rgba(248,113,113,.18)', border: 'rgba(248,113,113,.35)',
  },
]

const TRUST = [
  { Icon: Zap,   val: '< 24 hrs', lbl: 'Avg. Response' },
  { Icon: Star,  val: '4.8',      lbl: 'Google Rating'  },
  { Icon: Users, val: '1L+',      lbl: 'Customers'      },
]

function InputField({ icon: Icon, label, type = 'text', placeholder, value, onChange, required, maxLength, inputMode }) {
  return (
    <div className="eq-field">
      <label className="eq-lbl">{label}</label>
      <div className="cu-inp-wrap">
        <span className="cu-inp-icon"><Icon size={15} strokeWidth={2} /></span>
        <input
          className="cu-inp"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          maxLength={maxLength}
          inputMode={inputMode}
        />
      </div>
    </div>
  )
}

export default function ContactUs() {
  useScrollReveal()
  const [form, setForm]       = useState({ name: '', email: '', mobile: '', service: '', state: '', district: '', pincode: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const set = k => e => {
    let v = e.target.value
    if (k === 'mobile')  v = v.replace(/\D/g, '').slice(0, 10)
    if (k === 'pincode') v = v.replace(/\D/g, '').slice(0, 6)
    setForm(f => ({
      ...f,
      [k]: v,
      // Reset district whenever the state changes so an old district isn't
      // submitted alongside a new state.
      ...(k === 'state' ? { district: '' } : {}),
    }))
    if (error) setError('')
  }

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your full name.'
    if (!/^[6-9]\d{9}$/.test(form.mobile)) return 'Please enter a valid 10-digit mobile number starting with 6, 7, 8 or 9.'
    if (!/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(form.email)) return 'Please enter a valid email address.'
    if (!form.service) return 'Please select a service.'
    if (!form.state) return 'Please select your state.'
    if (!form.district) return 'Please select your district.'
    if (!/^[1-9]\d{5}$/.test(form.pincode)) return 'Please enter a valid 6-digit pin code.'
    return ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submitting) return
    const err = validate()
    if (err) { setError(err); return }
    setSubmitting(true)
    await submitLead({
      service: form.service || 'General Enquiry',
      name: form.name,
      mobileNumber: form.mobile,
      email: form.email,
      state: form.state,
      district: form.district,
      pinCode: form.pincode,
      amount: 0,
      paymentStatus: 'unpaid',
      source: 'Contact Us',
      formData: {
        enquiryService: form.service,
        state: form.state,
        pinCode: form.pincode,
        source: 'Contact Us Page',
      },
    })
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <main style={{ paddingTop: 66 }}>

      {/* ── HERO ── */}
      <section className="cu-hero">
        <div className="hero-bg">
          <div className="blob1" /><div className="blob2" /><div className="blob3" />
        </div>

        <div className="mx cu-hero-grid">
          {/* Left */}
          <div className="cu-hero-left">
            <h1 className="rv" style={{ letterSpacing: '-2px', marginBottom: 16 }}>
              Let's Talk.<br />
              <span className="teal">We're Always</span><br />
              <span className="amber">Here for You.</span>
            </h1>
            <p className="hero-sub rv" style={{ marginBottom: 32 }}>
              Any questions or remarks? Just write us a message!
            </p>
            <div className="cu-hero-trust rv">
              {TRUST.map(({ Icon, val, lbl }) => (
                <div className="cu-ht-item" key={lbl}>
                  <div className="cu-ht-ico"><Icon size={14} strokeWidth={2} color="var(--teal-dk)" /></div>
                  <div>
                    <div className="cu-ht-val">{val}</div>
                    <div className="cu-ht-lbl">{lbl}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — chat preview widget */}
          <div className="cu-hero-widget rv-r">
            <div className="cu-chat-card">
              <div className="cu-chat-header">
                <div className="cu-chat-avatar">MM</div>
                <div>
                  <div className="cu-chat-name">MakeMyDocuments</div>
                  <div className="cu-chat-status"><span className="live-dot" style={{ width:6, height:6 }} /> Online now</div>
                </div>
                <div className="cu-chat-logo"><MessageSquare size={18} strokeWidth={1.8} color="var(--teal)" /></div>
              </div>
              <div className="cu-chat-body">
                <div className="cu-bubble cu-bubble-left">
                  Hi! 👋 I need help with my Passport application.
                </div>
                <div className="cu-bubble cu-bubble-right">
                  Of course! Our experts are ready to help. Please share your details and we'll get started right away. ✅
                </div>
                <div className="cu-bubble cu-bubble-left">
                  That's great! How soon can you process it?
                </div>
                <div className="cu-typing">
                  <span /><span /><span />
                </div>
              </div>
              <div className="cu-chat-footer">
                <div className="cu-chat-input-mock">Type a message…</div>
                <div className="cu-chat-send"><Send size={14} strokeWidth={2.5} color="#fff" /></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MAIN ── */}
      <section className="cu-main">
        <div className="mx cu-layout">

          {/* ── LEFT PANEL ── */}
          <div className="cu-panel rv">
            <div className="cu-panel-blob cu-pb1" />
            <div className="cu-panel-blob cu-pb2" />

            <div className="cu-panel-inner">
              <div className="cu-panel-eyebrow">Get in touch</div>
              <h2 className="cu-panel-heading">We'd love to<br />hear from you.</h2>
              <p className="cu-panel-sub">
                Our team is ready to assist you with any document service — reach us via phone, email, or walk in.
              </p>

              <div className="cu-info-list">
                {INFO.map(({ Icon, label, lines, sub, color, bg, border }) => (
                  <div className="cu-info-item" key={label}>
                    <div className="cu-info-ico" style={{ background: bg, border: `1.5px solid ${border}` }}>
                      <Icon size={17} strokeWidth={1.8} color={color} />
                    </div>
                    <div className="cu-info-text">
                      <div className="cu-info-label">{label}</div>
                      {lines.map((l, i) => <div className="cu-info-line" key={i}>{l}</div>)}
                      {sub && <div className="cu-info-sub">{sub}</div>}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* ── RIGHT FORM ── */}
          <div className="cu-form-wrap rv-r">
            <div className="cu-form-head">
              <div className="cu-form-head-ico">
                <Send size={20} strokeWidth={1.8} color="var(--teal)" />
              </div>
              <div>
                <div className="cu-form-top-title">Send us a message</div>
                <div className="cu-form-top-sub">We'll get back to you within 24 hours</div>
              </div>
            </div>

            {submitted ? (
              <div className="cu-success">
                <div className="cu-success-ico">
                  <CheckCircle2 size={44} strokeWidth={1.5} color="var(--green)" />
                </div>
                <h3 style={{ marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ color: 'var(--ink3)', fontSize: 15, maxWidth: 320, margin: '0 auto' }}>
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button className="cu-reset" onClick={() => { setSubmitted(false); setForm({ name:'', email:'', mobile:'', service:'' }) }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="cu-form" onSubmit={handleSubmit} noValidate>

                <div className="cu-form-grid">
                  <InputField icon={User}       label="Full Name"      placeholder="Enter your Name"            value={form.name}    onChange={set('name')}    required />
                  <InputField icon={Mail}       label="Email Address"  placeholder="Enter a valid email address" value={form.email}   onChange={set('email')}   type="email" required />
                  <InputField icon={Smartphone} label="Mobile Number"  placeholder="10-digit mobile number"     value={form.mobile}  onChange={set('mobile')}  type="tel" maxLength={10} inputMode="numeric" required />

                  <div className="eq-field">
                    <label className="eq-lbl">Service Needed</label>
                    <div className="cu-inp-wrap">
                      <span className="cu-inp-icon"><ChevronDown size={15} strokeWidth={2} /></span>
                      <select className="cu-sel" value={form.service} onChange={set('service')} required>
                        <option value="">Select a Service</option>
                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="eq-field">
                    <label className="eq-lbl">State</label>
                    <div className="cu-inp-wrap">
                      <span className="cu-inp-icon"><MapPin size={15} strokeWidth={2} /></span>
                      <select className="cu-sel" value={form.state} onChange={set('state')} required>
                        <option value="">Select your state</option>
                        {ALL_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="eq-field">
                    <label className="eq-lbl">District</label>
                    <div className="cu-inp-wrap">
                      <span className="cu-inp-icon"><MapPin size={15} strokeWidth={2} /></span>
                      <select
                        className="cu-sel"
                        value={form.district}
                        onChange={set('district')}
                        required
                        disabled={!form.state}
                        style={!form.state ? { opacity: .5, cursor: 'not-allowed' } : {}}
                      >
                        <option value="">{form.state ? 'Select your district' : 'Select state first'}</option>
                        {getDistricts(form.state).map(d => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="eq-field">
                    <label className="eq-lbl">Pin Code</label>
                    <div className="cu-inp-wrap">
                      <span className="cu-inp-icon"><MapPin size={15} strokeWidth={2} /></span>
                      <input
                        className="cu-inp"
                        type="text"
                        inputMode="numeric"
                        maxLength={6}
                        placeholder="6-digit pin code"
                        value={form.pincode}
                        onChange={set('pincode')}
                        required
                      />
                    </div>
                  </div>
                </div>

                {error && (
                  <div style={{
                    background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c',
                    padding: '10px 14px', borderRadius: 10, fontSize: 13, marginBottom: 12,
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <span style={{ width: 6, height: 6, background: '#dc2626', borderRadius: '50%', flexShrink: 0 }} />
                    {error}
                  </div>
                )}

                <button type="submit" className="cu-submit" disabled={submitting}>
                  <Send size={15} strokeWidth={2.5} />
                  {submitting ? 'Submitting…' : 'Submit Message'}
                </button>

                {/* Social proof strip */}
                <div className="cu-proof-strip">
                  <div className="cu-proof-item">
                    <CheckCircle2 size={13} color="var(--green)" />
                    <span>1L+ customers helped</span>
                  </div>
                  <div className="cu-proof-dot" />
                  <div className="cu-proof-item">
                    <Star size={13} color="var(--amber)" />
                    <span>4.8 Google Rating</span>
                  </div>
                  <div className="cu-proof-dot" />
                  <div className="cu-proof-item">
                    <Zap size={13} color="var(--teal)" />
                    <span>Reply in &lt; 24 hrs</span>
                  </div>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

    </main>
  )
}
