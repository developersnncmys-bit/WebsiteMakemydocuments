import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Bagalkot | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Bagalkot, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Bagalkot, passport agent near me Bagalkot, passport services in Bagalkot, apply passport online Bagalkot, passport renewal Bagalkot, tatkal passport Bagalkot, passport office Bagalkot, PSK appointment Bagalkot, passport consultant Bagalkot, passport agent Bagalkot Karnataka',
  alternates: { canonical: 'https://makemydocuments.com/passport-agent-in-bagalkot' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['bagalkot']} />
}
