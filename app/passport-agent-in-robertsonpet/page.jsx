import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Robertsonpet | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Robertsonpet, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Robertsonpet, passport agent near me Robertsonpet, passport services in Robertsonpet, apply passport online Robertsonpet, passport renewal Robertsonpet, tatkal passport Robertsonpet, passport office Robertsonpet, PSK appointment Robertsonpet, passport consultant Robertsonpet, passport agent Robertsonpet Karnataka',
  alternates: { canonical: 'https://makemydocuments.com/passport-agent-in-robertsonpet' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['robertsonpet']} />
}
