import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Pune | Apply Passport Online with Make My Documents',
  description: 'Trusted passport agent in Pune — apply, renew, or reissue your passport with expert guidance. Fast PSK appointments, document verification, doorstep delivery.',
  keywords: 'passport agent in Pune, passport services Pune, apply passport Pune, passport renewal Pune, tatkal passport Pune, passport online Pune',
  alternates: { canonical: 'https://makemydocuments.com/passport-agent-in-pune' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities.pune} />
}