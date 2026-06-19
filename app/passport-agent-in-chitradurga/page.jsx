import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Chitradurga | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Chitradurga, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Chitradurga, passport agent near me Chitradurga, passport services in Chitradurga, apply passport online Chitradurga, passport renewal Chitradurga, tatkal passport Chitradurga, passport office Chitradurga, PSK appointment Chitradurga, passport consultant Chitradurga, passport agent Chitradurga Karnataka',
  alternates: { canonical: 'https://www.makemydocuments.com/passport-agent-in-chitradurga' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['chitradurga']} />
}
