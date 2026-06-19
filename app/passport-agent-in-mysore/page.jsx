import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Mysore | Apply Passport Online with Make My Documents',
  description: 'Trusted passport agent in Mysore — apply, renew, or reissue your passport with expert guidance. Fast PSK appointments, document verification, doorstep delivery.',
  keywords: 'passport agent in Mysore, passport services Mysore, apply passport Mysore, passport renewal Mysore, tatkal passport Mysore, passport online Mysore',
  alternates: { canonical: 'https://www.makemydocuments.com/passport-agent-in-mysore' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities.mysore} />
}