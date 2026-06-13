'use client'

import Link from 'next/link'
import { getService } from '../data/serviceSuccess'

// Inline styles, no `style jsx`. Avoids the brief unstyled flash on first
// navigation (especially noticeable after the Paytm redirect, where the page
// is loaded fresh and the WhatsApp FAB / cursor effect leak through until
// the CSS finishes parsing).
const S = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1000px',
    background: '#fff',
    padding: '32px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    gap: '24px',
    flexWrap: 'wrap',
  },
  text: {
    flex: '1 1 320px',
    minWidth: 0,
    textAlign: 'center',
  },
  checkWrap: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  checkCircle: {
    width: '80px',
    height: '80px',
    minWidth: '80px',
    minHeight: '80px',
    maxWidth: '80px',
    maxHeight: '80px',
    backgroundColor: '#25d366',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    flexShrink: 0,
  },
  check: {
    fontSize: '48px',
    color: '#fff',
    lineHeight: 1,
  },
  header: {
    fontSize: '24px',
    margin: '0 0 14px',
    color: '#333',
    fontWeight: 700,
  },
  message: {
    fontSize: '16px',
    margin: '0 0 16px',
    color: '#333',
    lineHeight: 1.55,
  },
  whatsapp: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#25d366',
    fontWeight: 'bold',
    marginTop: '6px',
    gap: '8px',
  },
  whatsappLogo: { width: '22px', height: '22px' },
  btnWrap: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '22px',
  },
  back: {
    display: 'inline-block',
    background: '#4caf50',
    color: '#fff',
    border: 'none',
    padding: '10px 22px',
    fontSize: '15px',
    borderRadius: '6px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: 600,
  },
  image: {
    flex: '1 1 280px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageImg: {
    maxWidth: '100%',
    width: '100%',
    height: 'auto',
    maxHeight: '360px',
    objectFit: 'contain',
  },
}

export default function RequestSuccess({ slug }) {
  const svc = getService(slug)

  return (
    <div style={S.page} className="rs-page">
      {/* Static <style> (not styled-jsx) — ships in the HTML so there's no
          unstyled flash, and lets us add the mobile breakpoint that inline
          styles can't express. */}
      <style>{`
        @media (max-width: 640px) {
          .rs-page    { padding: 14px !important; align-items: flex-start !important; }
          .rs-content { padding: 24px 18px !important; gap: 16px !important; }
          .rs-header  { font-size: 20px !important; }
          .rs-message { font-size: 14.5px !important; }
          .rs-check-circle { width: 64px !important; height: 64px !important; min-width: 64px !important; min-height: 64px !important; max-width: 64px !important; max-height: 64px !important; }
          .rs-check   { font-size: 38px !important; }
          .rs-img     { max-height: 220px !important; }
        }
      `}</style>
      <div style={S.content} className="rs-content">
        <div style={S.text}>
          <div style={S.checkWrap}>
            <div style={S.checkCircle} className="rs-check-circle">
              <span style={S.check} className="rs-check">&#10003;</span>
            </div>
          </div>

          <h1 style={S.header} className="rs-header">Application Received</h1>
          <p style={S.message} className="rs-message">{svc.message}</p>

          {/* WhatsApp upload CTA — only services that need eKYC document
              upload (PAN Card, Senior Citizen Card) set svc.cta. */}
          {svc.cta?.href && (
            <a
              href={svc.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              style={S.whatsapp}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                style={S.whatsappLogo}
              />
              <span>{svc.cta.label}</span>
            </a>
          )}

          <div style={S.btnWrap}>
            <Link href="/" style={S.back}>Back to Home</Link>
          </div>
        </div>

        {svc.image && (
          <div style={S.image}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={svc.image} alt={svc.label} style={S.imageImg} className="rs-img" />
          </div>
        )}
      </div>
    </div>
  )
}
