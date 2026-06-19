import MsmeRegistration from '@/views/MsmeRegistration'

export const metadata = {
  title: ' MSME Registration Online | Udyam Certificate Application ',
  description: 'Apply MSME certificate online with expert support. Quick Udyam registration process, secure guidance, and instant certificate approval for your business needs.',
  keywords: 'MSME certificate, apply MSME certificate, MSME registration, MSME certificate online, MSME certificate application, Udyam registration, Udyam certificate, online MSME registration India, MSME application, MSME agents near me, how to apply for MSME certificate, MSME registration form, MSME registration near me, MSME registration portal, documents required for MSME certificate, MSME certificate process, MSME site, new MSME certificate apply, Udyam certificate application, online Udyam registration',
  alternates: { canonical: 'https://www.makemydocuments.com/msme-certificate' },
  robots: 'ALL, index, follow',
  other: {
    rating: 'general',
    'revisit-after': '2 days',
    distribution: 'Global',
    language: 'English',
    GOOGLEBOTS: 'All, FOLLOW',
    YAHOOBOTS: 'All, FOLLOW',
    MSNBOTS: 'All, FOLLOW',
    BINGBOTS: 'All, FOLLOW',
    'Googlebot-Image': 'all',
    Slurp: 'all',
    Scooter: 'all',
    WEBCRAWLERS: 'ALL',
  },
}

export default function Page() {
  return <MsmeRegistration />
}
