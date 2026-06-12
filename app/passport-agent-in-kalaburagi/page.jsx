import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Kalaburagi | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Kalaburagi, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Kalaburagi, passport agent near me Kalaburagi, passport services in Kalaburagi, apply passport online Kalaburagi, passport renewal Kalaburagi, tatkal passport Kalaburagi, passport office Kalaburagi, PSK appointment Kalaburagi, passport consultant Kalaburagi, passport agent Kalaburagi Karnataka',
  alternates: { canonical: 'https://makemydocuments.com/passport-agent-in-kalaburagi' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['kalaburagi']} />
}
