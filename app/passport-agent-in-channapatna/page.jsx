import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Channapatna | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Channapatna, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Channapatna, passport agent near me Channapatna, passport services in Channapatna, apply passport online Channapatna, passport renewal Channapatna, tatkal passport Channapatna, passport office Channapatna, PSK appointment Channapatna, passport consultant Channapatna, passport agent Channapatna Karnataka',
  alternates: { canonical: 'https://www.makemydocuments.com/passport-agent-in-channapatna' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['channapatna']} />
}
