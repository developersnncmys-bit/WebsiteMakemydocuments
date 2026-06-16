'use client'

import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

export default function WhatsAppFAB() {
  return (
    <>
      {/* Call button — same number as WhatsApp, sits just above the WA bubble */}
      <a className="call-fab" href="tel:+918867529731" aria-label="Call us">
        <FaPhoneAlt size={24} color="#fff" />
      </a>
      <a className="wa-fab" href="https://wa.me/918867529731" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <span className="wa-fab-pulse" />
        <FaWhatsapp size={28} color="#fff" />
      </a>
    </>
  )
}
