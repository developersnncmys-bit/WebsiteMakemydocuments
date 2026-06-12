import PassportAgentCity from '@/views/landing/PassportAgentCity'
import { passportAgentCities } from '@/data/passportAgentCities'

export const metadata = {
  title: 'Passport Agent in Vijayapura | Apply, Renew & Reissue Passport Online',
  description: 'Looking for a trusted passport agent in Vijayapura, Karnataka? Make My Documents helps you apply for a new passport, renew or reissue with expert guidance, fast PSK/POPSK appointment booking, document verification and doorstep delivery.',
  keywords: 'passport agent in Vijayapura, passport agent near me Vijayapura, passport services in Vijayapura, apply passport online Vijayapura, passport renewal Vijayapura, tatkal passport Vijayapura, passport office Vijayapura, PSK appointment Vijayapura, passport consultant Vijayapura, passport agent Vijayapura Karnataka',
  alternates: { canonical: 'https://makemydocuments.com/passport-agent-in-vijayapura' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <PassportAgentCity city={passportAgentCities['vijayapura']} />
}
