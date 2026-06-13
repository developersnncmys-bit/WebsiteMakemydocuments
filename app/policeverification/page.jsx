import PoliceVerification from '@/views/PoliceVerification'

export const metadata = {
  title: ' Apply Police Verification Certificate Online | PVC Application India ',
  description: 'Apply online for your Police Verification Certificate (PVC) with expert assistance. Quick and reliable service for employment, rental, and immigration purposes.',
  keywords: 'police verification certificate, PVC application, apply PVC online, police verification online, PVC application India, PVC certificate for employment, police verification for rental, police verification agents near me, PVC for immigration, police verification Bangalore, online police verification service, PVC application process, police verification documents required, how to apply for police verification certificate, police clearance certificate, PVC for job application, police verification certificate India, apply PVC online India',
  alternates: { canonical: 'https://makemydocuments.com/policeverification' },
  robots: 'ALL, index, follow',
  other: {
    rating: 'General',
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
  return <PoliceVerification />
}
