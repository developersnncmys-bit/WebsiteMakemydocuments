import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Hassan | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Hassan, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Hassan, passport agent near me Hassan, passport services in Hassan, apply passport online Hassan, passport renewal Hassan, tatkal passport Hassan, passport office Hassan, PSK appointment Hassan, passport consultant Hassan, passport agent Hassan Karnataka',
  alternates: { canonical: 'https://makemydocuments.com/passport-agent-in-hassan' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['hassan']} />
}
