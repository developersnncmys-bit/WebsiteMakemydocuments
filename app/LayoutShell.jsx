'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Nav         from '@/components/Nav'
import Footer      from '@/components/Footer'
import WhatsAppFAB from '@/components/WhatsAppFAB'
import Cursor      from '@/components/Cursor'
import ProgressBar from '@/components/ProgressBar'

const NO_FOOTER_SET = new Set([
  '/insurance', '/pan-card', '/pan-card-form', '/tourist-visa',
  '/rental-agreement', '/rental-agreement-form', '/lease-agreement',
  '/lease-agreement-form', '/passport', '/passport-form',
  '/senior-citizen-card', '/senior-citizen-card-form',
  '/policeverification', '/police-verification-form',
  '/msme-registration', '/msme-registration-form',
  '/police-clearance', '/police-clearance-certificate-form',
  '/affidavits', '/dubai-tourist-visa', '/dubai-tourist-visa-for-indians', '/dubai-tourist-visa-for-indians-form',
  '/singapore-visa', '/singapore-visa-form', '/uk-visa', '/uk-visa-form',
  '/australia-visa', '/australia-visa-form', '/malaysia-visa', '/malaysia-visa-form',
  '/egypt-visa', '/egypt-visa-form', '/vietnam-tourist-visa', '/vietnam-tourist-visa-for-indians',
  '/vietnam-tourist-visa-form', '/hong-kong-tourist-visa-for-indians',
  '/hong-kong-visa-form', '/indonesia-tourist-visa-for-indians',
  '/indonesia-visa-form', '/azerbaijan-visa', '/azerbaijan-visa-form',
  '/oman-visa', '/oman-visa-form', '/morocco-visa', '/morocco-visa-form',
  '/bahrain-visa', '/bahrain-visa-form', '/qatar-visa', '/qatar-visa-form',
  '/russia-visa', '/russia-visa-form', '/uzbekistan-visa', '/uzbekistan-visa-form',
  '/two-wheeler-insurance-form',
  '/four-wheeler-insurance-form',
  '/health-insurance-form',
])

const NO_WA_FAB_SET = new Set([
  '/pan-card', '/pan-card-form', '/rental-agreement', '/rental-agreement-form',
  '/lease-agreement', '/lease-agreement-form', '/passport', '/passport-form',
  '/senior-citizen-card', '/senior-citizen-card-form',
  '/policeverification', '/police-verification-form',
  '/msme-registration', '/msme-registration-form',
  '/police-clearance', '/police-clearance-certificate-form',
  '/affidavits', '/dubai-tourist-visa', '/dubai-tourist-visa-for-indians', '/dubai-tourist-visa-for-indians-form',
  '/singapore-visa', '/singapore-visa-form', '/uk-visa', '/uk-visa-form',
  '/australia-visa', '/australia-visa-form', '/malaysia-visa', '/malaysia-visa-form',
  '/egypt-visa', '/egypt-visa-form', '/vietnam-tourist-visa', '/vietnam-tourist-visa-for-indians',
  '/vietnam-tourist-visa-form', '/hong-kong-tourist-visa-for-indians',
  '/hong-kong-visa-form', '/indonesia-tourist-visa-for-indians',
  '/indonesia-visa-form', '/azerbaijan-visa', '/azerbaijan-visa-form',
  '/oman-visa', '/oman-visa-form', '/morocco-visa', '/morocco-visa-form',
  '/bahrain-visa', '/bahrain-visa-form', '/qatar-visa', '/qatar-visa-form',
  '/russia-visa', '/russia-visa-form', '/uzbekistan-visa', '/uzbekistan-visa-form',
  '/two-wheeler-insurance-form',
  '/four-wheeler-insurance-form',
  '/health-insurance-form',
])

export default function LayoutShell({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  const isAffidavitForm = pathname.startsWith('/affidavit/')
  const isServiceForm = pathname.endsWith('-form')
  const isBlogPage = pathname === '/blogs' || pathname.startsWith('/blogs/')
  // Standalone post-payment screens — no nav, no footer, no WhatsApp bubble.
  const isStandalone =
    pathname.startsWith('/request_success/') ||
    pathname.startsWith('/failure/')

  const showNav    = !isStandalone
  const showFooter = !isStandalone && !NO_FOOTER_SET.has(pathname) && !isAffidavitForm && !isServiceForm
  const showWaFab  = !isStandalone && !NO_WA_FAB_SET.has(pathname) && !isAffidavitForm && !isBlogPage && !isServiceForm

  return (
    <>
      {/* Custom cursor zooms on hover over buttons/links — looks weird on the
          post-payment screen where the user has just been redirected. */}
      {!isStandalone && <Cursor />}
      {!isStandalone && <ProgressBar />}
      {showNav && <Nav />}
      {children}
      {showFooter && <Footer />}
      {showWaFab  && <WhatsAppFAB />}
    </>
  )
}
