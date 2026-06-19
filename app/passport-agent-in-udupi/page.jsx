import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Udupi | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Udupi, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Udupi, passport agent near me Udupi, passport services in Udupi, apply passport online Udupi, passport renewal Udupi, tatkal passport Udupi, passport office Udupi, PSK appointment Udupi, passport consultant Udupi, passport agent Udupi Karnataka',
  alternates: { canonical: 'https://www.makemydocuments.com/passport-agent-in-udupi' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['udupi']} />
}
