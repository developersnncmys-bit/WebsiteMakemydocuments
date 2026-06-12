import CommercialVehicleInsurance from '@/views/CommercialVehicleInsurance'

export const metadata = {
  title: 'Commercial Vehicle Insurance - Buy/Renew Policies Online Instantly',
  description: 'Protect your commercial vehicles with affordable insurance plans. Comprehensive or third-party coverage, instant online process, no paperwork, and immediate policy download.',
  keywords: 'commercial vehicle insurance, online commercial vehicle insurance, truck insurance, fleet insurance, taxi insurance, goods carrier insurance, bus insurance, commercial auto insurance, heavy vehicle insurance, buy commercial vehicle insurance online, renew commercial vehicle insurance, third-party vehicle insurance, comprehensive vehicle insurance, affordable commercial vehicle insurance, apply for commercial vehicle insurance',
  authors: [{ url: 'https://makemydocuments.com/commercial-vehicle-insurance' }],
  alternates: { canonical: 'https://makemydocuments.com/commercial-vehicle-insurance' },
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
  },
}

export default function Page() {
  return <CommercialVehicleInsurance />
}
