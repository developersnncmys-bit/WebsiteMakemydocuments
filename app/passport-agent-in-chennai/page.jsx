import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Chennai | Apply Passport Online with Make My Documents',
  description: 'Trusted passport agent in Chennai — apply, renew, or reissue your passport with expert guidance. Fast PSK appointments, document verification, doorstep delivery.',
  keywords: 'passport agent in Chennai, passport services Chennai, apply passport Chennai, passport renewal Chennai, tatkal passport Chennai, passport online Chennai',
  alternates: { canonical: 'https://www.makemydocuments.com/passport-agent-in-chennai' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities.chennai} />
}