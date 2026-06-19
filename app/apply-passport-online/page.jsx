import Passport from '@/views/Passport'

export const metadata = {
  title: 'Apply Passport Online | Fast Online Passport Application India',
  description: 'Apply for a new passport online in India with expert guidance. Fresh passport, renewal, tatkal — fast PSK appointments and complete documentation help.',
  keywords: 'apply passport online, passport application online india, online passport apply, new passport online, passport renewal online, tatkal passport online',
  alternates: { canonical: 'https://www.makemydocuments.com/apply-passport-online' },
  robots: 'ALL, index, follow',
}

export default function Page() {
  return <Passport />
}