import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Maddur | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Maddur, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Maddur, passport agent near me Maddur, passport services in Maddur, apply passport online Maddur, passport renewal Maddur, tatkal passport Maddur, passport office Maddur, PSK appointment Maddur, passport consultant Maddur, passport agent Maddur Karnataka',
  alternates: { canonical: 'https://www.makemydocuments.com/passport-agent-in-maddur' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['maddur']} />
}
