import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Chamarajanagar | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Chamarajanagar, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Chamarajanagar, passport agent near me Chamarajanagar, passport services in Chamarajanagar, apply passport online Chamarajanagar, passport renewal Chamarajanagar, tatkal passport Chamarajanagar, passport office Chamarajanagar, PSK appointment Chamarajanagar, passport consultant Chamarajanagar, passport agent Chamarajanagar Karnataka',
  alternates: { canonical: 'https://makemydocuments.com/passport-agent-in-chamarajanagar' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['chamarajanagar']} />
}
