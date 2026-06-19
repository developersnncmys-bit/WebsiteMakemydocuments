import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Koppal | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Koppal, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Koppal, passport agent near me Koppal, passport services in Koppal, apply passport online Koppal, passport renewal Koppal, tatkal passport Koppal, passport office Koppal, PSK appointment Koppal, passport consultant Koppal, passport agent Koppal Karnataka',
  alternates: { canonical: 'https://www.makemydocuments.com/passport-agent-in-koppal' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['koppal']} />
}
