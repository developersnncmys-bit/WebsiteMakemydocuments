import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Bangalore | Apply Passport Online with Make My Documents',
  description: 'Trusted passport agent in Bangalore — apply, renew, or reissue your passport with expert guidance. Fast PSK appointments, document verification, doorstep delivery.',
  keywords: 'passport agent in Bangalore, passport services Bangalore, apply passport Bangalore, passport renewal Bangalore, tatkal passport Bangalore, passport online Bangalore',
  alternates: { canonical: 'https://makemydocuments.com/passport-agent-in-bangalore' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities.bangalore} />
}