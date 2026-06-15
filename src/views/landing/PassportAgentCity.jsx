'use client'

import { useState } from 'react'
import Link from 'next/link'
import ReviewSlider from '../../components/ReviewSlider'
import {
  UserPlus, Upload, ShieldCheck, CreditCard, CalendarCheck,
  MapPin, Shield, Package, ChevronRight, FileText, AlertCircle, CheckCircle2,
} from 'lucide-react'

const STEP_ICONS = [UserPlus, Upload, ShieldCheck, CreditCard, CalendarCheck, MapPin, Shield, Package]

const I = ({ icon: Icon, size = 22, color = 'var(--teal)' }) => (
  <Icon size={size} color={color} strokeWidth={1.8} />
)

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`ins-faq-v2${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)}>
      <div className="ins-faq-v2-q">
        <span>{q}</span>
        <span className="ins-faq-v2-icon">{open ? '-' : '+'}</span>
      </div>
      {open && a && (
        <div className="ins-faq-v2-a">
          {a.split('\n').map((line, i) => <p key={i} style={{ margin: i > 0 ? '6px 0 0' : 0 }}>{line}</p>)}
        </div>
      )}
    </div>
  )
}

function ApplyForm() {
  return (
    <div className="pan-apply-card" style={{ position: 'sticky', top: 86 }}>
      <div className="pan-apply-head">
        <h3 className="pan-apply-title">Apply in 2 Minutes</h3>
        <p className="pan-apply-sub">It takes less than 2 minutes to Apply</p>
      </div>
      <div className="pan-apply-body">
        <Link href="/passport-form" className="pan-apply-btn">
          Apply Online <ChevronRight size={16} strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  )
}

export default function PassportAgentCity({ city }) {
  const title = `Passport Agent in ${city.city}`

  return (
    <div className="svc-page">

      {/* Breadcrumb */}
      <div className="svc-breadcrumb">
        <div className="mx"><Link href="/">Home</Link> / {title}</div>
      </div>

      {/* -- Hero -- */}
      <div className="svc-hero-wrap">
        <div className="hero-bg" style={{ position: 'absolute', inset: 0 }}>
          <div className="dots" /><div className="blob1" /><div className="blob2" />
        </div>
        <div className="mx svc-hero-content">
          <div className="svc-hero-left">
            <div className="hero-pill">
              <span className="live-dot" />
              {city.deliveryPromise}
            </div>
            <h1 className="svc-h1">
              <span className="teal">Passport Agent</span><br />
              <span className="amber">in {city.city}</span>
            </h1>
            <p className="svc-hero-sub">
              New passport, renewal, or tatkal in {city.city} — we handle everything online. Fast, reliable, doorstep delivery.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
              <span style={{ background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.25)', borderRadius: 50, padding: '5px 14px', fontSize: 12, color: '#fff', fontWeight: 600 }}>
                ⏱ {city.processingNormal}
              </span>
              <span style={{ background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.25)', borderRadius: 50, padding: '5px 14px', fontSize: 12, color: '#fff', fontWeight: 600 }}>
                ⏱ {city.processingTatkal}
              </span>
              <span style={{ background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.25)', borderRadius: 50, padding: '5px 14px', fontSize: 12, color: '#fff', fontWeight: 600 }}>
                Starting from {city.startingFrom}
              </span>
            </div>
            <div className="svc-hero-acts">
              <Link href="/passport-form" className="btn-amber">Apply Now →</Link>
            </div>
          </div>
          <div className="svc-hero-badges">
            {[
              { val: '99%',    lbl: 'Delivered on Time' },
              { val: '15-20',  lbl: 'Days (Normal)'     },
              { val: '5-10',   lbl: 'Days (Tatkal)'     },
              { val: '4.8★',   lbl: 'Google Rating'     },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="svc-stat-card">
                <div className="svc-stat-val">{val}</div>
                <div className="svc-stat-lbl">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="svc-hero-wave" />
      </div>

      {/* -- Documents Required + How It Works + Apply Form -- */}
      <section className="ins-section-white">
        <div className="mx">
          <div className="sol-layout narrow">
            <div>
              {/* Documents Required */}
              <div className="eyebrow">What You Need</div>
              <h2>Documents Required</h2>

              {/* Fresh Passport */}
              <div className="pan-doc-v2" style={{ marginBottom: 16, marginTop: 24 }}>
                <div className="pan-doc-v2-header pan-doc-v2-teal">
                  <div className="pan-doc-v2-ico"><I icon={FileText} size={18} color="var(--teal)" /></div>
                  <h3>Documents Required For Fresh Passport</h3>
                </div>

                <p style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)', margin: '16px 20px 0' }}>Proof of Identity (Any 01)</p>
                <ul className="pan-doc-v2-list" style={{ paddingTop: 10 }}>
                  {city.docs.fresh.identity.map(d => (
                    <li key={d}><I icon={CheckCircle2} size={14} color="var(--teal)" /> {d}</li>
                  ))}
                </ul>

                <p style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)', margin: '8px 20px 0' }}>Proof of Address (Any 01)</p>
                <ul className="pan-doc-v2-list" style={{ paddingTop: 10 }}>
                  {city.docs.fresh.address.map(d => (
                    <li key={d}><I icon={CheckCircle2} size={14} color="var(--teal)" /> {d}</li>
                  ))}
                </ul>

                <p style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)', margin: '8px 20px 0' }}>Proof of Birth (Any 01)</p>
                <ul className="pan-doc-v2-list" style={{ paddingTop: 10, paddingBottom: 16 }}>
                  {city.docs.fresh.birth.map(d => (
                    <li key={d}><I icon={CheckCircle2} size={14} color="var(--teal)" /> {d}</li>
                  ))}
                </ul>
              </div>

              {/* Renewal / Reissue — optional */}
              {city.showRenewalDocs && (
                <div className="pan-doc-v2" style={{ marginBottom: 16 }}>
                  <div className="pan-doc-v2-header pan-doc-v2-amber">
                    <div className="pan-doc-v2-ico" style={{ background: 'var(--amber-bg)', borderColor: 'var(--amber-bd)' }}>
                      <I icon={AlertCircle} size={18} color="var(--amber)" />
                    </div>
                    <h3>Document Required for Renewal / Reissue of Passport</h3>
                  </div>
                  <ul className="pan-doc-v2-list">
                    {city.docs.renewal.map(d => (
                      <li key={d}><I icon={CheckCircle2} size={14} color="var(--amber)" /> {d}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Minor Passport */}
              <div className="pan-doc-v2" style={{ marginBottom: 36 }}>
                <div className="pan-doc-v2-header pan-doc-v2-green">
                  <div className="pan-doc-v2-ico" style={{ background: 'var(--green-bg)', borderColor: 'var(--green-bd)' }}>
                    <I icon={CheckCircle2} size={18} color="var(--green)" />
                  </div>
                  <h3>Document Required for Minor Passport</h3>
                </div>
                <ul className="pan-doc-v2-list">
                  {city.docs.minor.map(d => (
                    <li key={d}><I icon={CheckCircle2} size={14} color="var(--green)" /> {d}</li>
                  ))}
                </ul>
              </div>

              {/* How It Works */}
              <div className="eyebrow">Simple Process</div>
              <h2>How It Works</h2>
              <p className="sec-desc" style={{ marginBottom: 32 }}>
                We follow a simple, step-by-step process to make your passport application stress-free:
              </p>
              <div className="sol-steps">
                {city.steps.map(({ title, desc }, i) => {
                  const Icon = STEP_ICONS[i] || UserPlus
                  return (
                    <div key={i} className="sol-step">
                      <div className="sol-connector" />
                      <div className="sol-n ins-step-n">
                        <I icon={Icon} size={16} color="#fff" />
                      </div>
                      <div>
                        <h4>Step {i + 1}: {title}</h4>
                        <p style={{ fontSize: 13.5, color: 'var(--ink3)', lineHeight: 1.65, marginTop: 4 }}>{desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <ApplyForm />
          </div>
        </div>
      </section>

      {/* -- Charges -- */}
      <section className="ins-section-surf">
        <div className="mx">
          <div className="eyebrow">Pricing</div>
          <h2>Charges</h2>
          <div className="ins-callout-box" style={{ maxWidth: 720, marginTop: 20 }}>
            <ul className="pan-bullet-list" style={{ marginBottom: 0 }}>
              <li><strong style={{ color: 'var(--amber)' }}>Rs. {city.charge.normal}/-</strong> For (Normal Application)</li>
              <li><strong style={{ color: 'var(--amber)' }}>Rs. {city.charge.tatkal}/-</strong> For (Tatkal Application)</li>
              <li>
                <strong style={{ color: 'var(--amber)' }}>Rs. {city.charge.booking}/-</strong> as booking fee. Need to pay while submitting online form{' '}
                <span style={{ color: 'var(--ink3)' }}>(This amount will be adjusted in total bill)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* -- Reviews -- */}
      <section className="ins-section-white">
        <div className="mx">
          <div className="shead center">
            <div className="eyebrow">Client Reviews</div>
            <h2>Our Client Reviews</h2>
          </div>
          <ReviewSlider reviews={city.reviews} />
        </div>
      </section>

      {/* -- Related Services -- */}
      <section className="ins-section-surf">
        <div className="mx">
          <div className="shead center" style={{ marginBottom: 32 }}>
            <div className="eyebrow">Explore More</div>
            <h2>Our Other Related Services</h2>
          </div>
          <div className="pan-related-grid">
            {city.related.map(({ label, path }) => (
              <Link key={label} href={path} className="pan-related-card">
                <span>{label}</span>
                <span className="pan-related-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- FAQs -- */}
      <section className="ins-section-white">
        <div className="mx">
          <div className="shead center">
            <div className="eyebrow">Got Questions?</div>
            <h2>FAQs</h2>
            <p className="sec-desc">Need help? Contact us for any queries related to us</p>
          </div>
          <div className="ins-faq-v2-grid">
            {city.faqs.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* -- Long-form Content + Apply Form -- */}
      <section className="ins-section-surf">
        <div className="mx">
          <div className="sol-layout narrow">
            <div>
              {city.content.map((section, i) => (
                <div key={i} style={{ marginBottom: 28 }}>
                  <h2 className="pan-content-h2" style={{ color: 'var(--teal)', fontSize: i === 0 ? 22 : 20, marginBottom: 12 }}>{section.h}</h2>
                  {section.p?.map((para, pi) => (
                    <p key={pi} className="ins-body-p" style={{ marginBottom: 14 }}>{para}</p>
                  ))}
                  {section.subs?.map((sub, si) => (
                    <div key={si} style={{ marginTop: 14 }}>
                      <h3 className="pan-content-h2" style={{ color: 'var(--ink)', fontSize: 17, marginBottom: 8 }}>{sub.h}</h3>
                      {sub.p?.map((para, pi) => (
                        <p key={pi} className="ins-body-p" style={{ marginBottom: 12 }}>{para}</p>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <ApplyForm />
          </div>
        </div>
      </section>

    </div>
  )
}
