import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Hyderabad | Apply Passport Online with Make My Documents',
  description: 'Trusted passport agent in Hyderabad — apply, renew, or reissue your passport with expert guidance. Fast PSK appointments, document verification, doorstep delivery.',
  keywords: 'passport agent in Hyderabad, passport services Hyderabad, apply passport Hyderabad, passport renewal Hyderabad, tatkal passport Hyderabad, passport online Hyderabad',
  alternates: { canonical: 'https://makemydocuments.com/passport-agent-in-hyderabad' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities.hyderabad} />
}