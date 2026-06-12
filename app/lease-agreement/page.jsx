import LeaseAgreement from '@/views/LeaseAgreement'

export const metadata = {
  title: ' Lease Agreement Online|Draft In 60 Minutes|Delivery Within 24 Hours',
  description: 'Now get your lease agreement online, Lease Agreement simple online process.Register online, Drafting, Review Drafting, Payment, Doorstep Delivery',
  keywords: 'lease agreement, lease agreement online, how to create lease agreement,lease agreement near me, lease agreement bangalore, online lease agreement, online lease agreement near me, lease agreement, notarized lease agreement online, house lease agreement, online house lease agreement, home lease agreement, lease agreement near me, lease agreement bangalore,lease agreement online bangalore, lease agreement karnataka, online agreement services.',
  authors: [{ url: 'https://makemydocuments.com/lease-agreement' }],
  alternates: { canonical: 'https://makemydocuments.com/lease-agreement' },
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
  return <LeaseAgreement />
}
