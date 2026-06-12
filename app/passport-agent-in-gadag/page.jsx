import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Gadag | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Gadag, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Gadag, passport agent near me Gadag, passport services in Gadag, apply passport online Gadag, passport renewal Gadag, tatkal passport Gadag, passport office Gadag, PSK appointment Gadag, passport consultant Gadag, passport agent Gadag Karnataka',
  alternates: { canonical: 'https://makemydocuments.com/passport-agent-in-gadag' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['gadag']} />
}
