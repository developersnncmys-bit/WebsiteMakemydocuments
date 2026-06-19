import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Shivamogga | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Shivamogga, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Shivamogga, passport agent near me Shivamogga, passport services in Shivamogga, apply passport online Shivamogga, passport renewal Shivamogga, tatkal passport Shivamogga, passport office Shivamogga, PSK appointment Shivamogga, passport consultant Shivamogga, passport agent Shivamogga Karnataka',
  alternates: { canonical: 'https://www.makemydocuments.com/passport-agent-in-shivamogga' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['shivamogga']} />
}
