import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Hubli-Dharwad | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Hubli-Dharwad, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Hubli-Dharwad, passport agent near me Hubli-Dharwad, passport services in Hubli-Dharwad, apply passport online Hubli-Dharwad, passport renewal Hubli-Dharwad, tatkal passport Hubli-Dharwad, passport office Hubli-Dharwad, PSK appointment Hubli-Dharwad, passport consultant Hubli-Dharwad, passport agent Hubli-Dharwad Karnataka',
  alternates: { canonical: 'https://www.makemydocuments.com/passport-agent-in-hubli-dharwad' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['hubli-dharwad']} />
}
