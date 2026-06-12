import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Mangaluru | Apply Passport Online with Make My Documents',
  description: 'Trusted passport agent in Mangaluru — apply, renew, or reissue your passport with expert guidance. Fast PSK appointments, document verification, doorstep delivery.',
  keywords: 'passport agent in Mangaluru, passport services Mangaluru, apply passport Mangaluru, passport renewal Mangaluru, tatkal passport Mangaluru, passport online Mangaluru',
  alternates: { canonical: 'https://makemydocuments.com/passport-agent-in-mangaluru' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities.mangaluru} />
}