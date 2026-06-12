import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Bidar | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Bidar, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Bidar, passport agent near me Bidar, passport services in Bidar, apply passport online Bidar, passport renewal Bidar, tatkal passport Bidar, passport office Bidar, PSK appointment Bidar, passport consultant Bidar, passport agent Bidar Karnataka',
  alternates: { canonical: 'https://makemydocuments.com/passport-agent-in-bidar' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['bidar']} />
}
