import RentalAgreement from '@/views/RentalAgreement'

export const metadata = {
  title: ' Rental Agreement Online|Draft In 60 Minutes|Delivery Within 24 Hours',
  description: 'Now get your Rental agreement online, Rental Agreement simple online process.Register online, Drafting, Review Drafting, Payment, Doorstep Delivery',
  keywords: 'rental agreement, rental agreement online, how to create rental agreement,rental agreement near me, rental agreement bangalore, online rental agreement, online rent agreement near me, rent agreement, notarized rent agreement online, house rental agreement, online house rental agreement, home rental agreement, rent agreement near me, rent agreement bangalore,rent agreement online bangalore, rental agreement karnataka, online agreement services.',
  authors: [{ url: 'https://makemydocuments.com/rental-agreement' }],
  alternates: { canonical: 'https://www.makemydocuments.com/rental-agreement' },
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
  return <RentalAgreement />
}
