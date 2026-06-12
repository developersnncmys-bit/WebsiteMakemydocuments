import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Tumakuru | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Tumakuru, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Tumakuru, passport agent near me Tumakuru, passport services in Tumakuru, apply passport online Tumakuru, passport renewal Tumakuru, tatkal passport Tumakuru, passport office Tumakuru, PSK appointment Tumakuru, passport consultant Tumakuru, passport agent Tumakuru Karnataka',
  alternates: { canonical: 'https://makemydocuments.com/passport-agent-in-tumakuru' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['tumakuru']} />
}
