import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Chikkaballapur | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Chikkaballapur, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Chikkaballapur, passport agent near me Chikkaballapur, passport services in Chikkaballapur, apply passport online Chikkaballapur, passport renewal Chikkaballapur, tatkal passport Chikkaballapur, passport office Chikkaballapur, PSK appointment Chikkaballapur, passport consultant Chikkaballapur, passport agent Chikkaballapur Karnataka',
  alternates: { canonical: 'https://www.makemydocuments.com/passport-agent-in-chikkaballapur' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['chikkaballapur']} />
}
