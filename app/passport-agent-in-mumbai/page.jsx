import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Mumbai | Apply Passport Online with Make My Documents',
  description: 'Trusted passport agent in Mumbai — apply, renew, or reissue your passport with expert guidance. Fast PSK appointments, document verification, doorstep delivery.',
  keywords: 'passport agent in Mumbai, passport services Mumbai, apply passport Mumbai, passport renewal Mumbai, tatkal passport Mumbai, passport online Mumbai',
  alternates: { canonical: 'https://makemydocuments.com/passport-agent-in-mumbai' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities.mumbai} />
}