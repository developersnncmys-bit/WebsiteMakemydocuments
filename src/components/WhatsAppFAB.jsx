'use client'

import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

export default function WhatsAppFAB({ showCall = false, number = '918867529731' }) {
  return (
    <>
      {/* Call button — sits just above the WA bubble. Only on passport landing
          pages (showCall). */}
      {showCall && (
        <a className="call-fab" href={`tel:+${number}`} aria-label="Call us">
          <FaPhoneAlt size={24} color="#fff" />
        </a>
      )}
      <a className={`wa-fab`} href={`https://wa.me/${number}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <span className="wa-fab-pulse" />
        <FaWhatsapp size={28} color="#fff" />
      </a>
    </>
  )
}
