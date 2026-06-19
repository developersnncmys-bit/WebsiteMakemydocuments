import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Chikkodi | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Chikkodi, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Chikkodi, passport agent near me Chikkodi, passport services in Chikkodi, apply passport online Chikkodi, passport renewal Chikkodi, tatkal passport Chikkodi, passport office Chikkodi, PSK appointment Chikkodi, passport consultant Chikkodi, passport agent Chikkodi Karnataka',
  alternates: { canonical: 'https://www.makemydocuments.com/passport-agent-in-chikkodi' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['chikkodi']} />
}
