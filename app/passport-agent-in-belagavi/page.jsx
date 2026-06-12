import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Belagavi | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Belagavi, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Belagavi, passport agent near me Belagavi, passport services in Belagavi, apply passport online Belagavi, passport renewal Belagavi, tatkal passport Belagavi, passport office Belagavi, PSK appointment Belagavi, passport consultant Belagavi, passport agent Belagavi Karnataka',
  alternates: { canonical: 'https://makemydocuments.com/passport-agent-in-belagavi' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['belagavi']} />
}
