import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Delhi | Apply Passport Online with Make My Documents',
  description: 'Trusted passport agent in Delhi — apply, renew, or reissue your passport with expert guidance. Fast PSK appointments, document verification, doorstep delivery.',
  keywords: 'passport agent in Delhi, passport services Delhi, apply passport Delhi, passport renewal Delhi, tatkal passport Delhi, passport online Delhi',
  alternates: { canonical: 'https://www.makemydocuments.com/passport-agent-in-delhi' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities.delhi} />
}