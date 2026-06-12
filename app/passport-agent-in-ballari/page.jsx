import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Ballari | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Ballari, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Ballari, passport agent near me Ballari, passport services in Ballari, apply passport online Ballari, passport renewal Ballari, tatkal passport Ballari, passport office Ballari, PSK appointment Ballari, passport consultant Ballari, passport agent Ballari Karnataka',
  alternates: { canonical: 'https://makemydocuments.com/passport-agent-in-ballari' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['ballari']} />
}
