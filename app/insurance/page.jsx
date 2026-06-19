import Insurance from '@/views/Insurance'

const SHARED_BOTS = {
  GOOGLEBOTS: 'All, FOLLOW',
  YAHOOBOTS: 'All, FOLLOW',
  MSNBOTS: 'All, FOLLOW',
  BINGBOTS: 'All, FOLLOW',
  'Googlebot-Image': 'all',
  Slurp: 'all',
  Scooter: 'all',
  WEBCRAWLERS: 'ALL',
}

export const metadata = {
  title: 'Buy & Renew Insurance Online | Bike, Health, Life, Card',
  description: ' Buy or renew bike, health, life & card insurance online. Fast approvals, secure process, and instant policy downloads without extra steps - Apply online',
  keywords: 'bike insurance, two wheeler insurance, health insurance, life insurance, car insurance, motorcycle insurance, scooter insurance, insurance renewal, bike insurance online, health insurance online, life insurance online, motorcycle policy, two wheeler insurance renewal, instant bike insurance, health and life policies, card insurance online, buy insurance online, renew insurance online, no inspection, paperless insurance',
  authors: [{ url: 'https://www.makemydocuments.com/insurance' }],
  alternates: { canonical: 'https://www.makemydocuments.com/insurance' },
  robots: 'ALL, index, follow',
  other: {
    rating: 'general',
    'revisit-after': '2 days',
    distribution: 'Global',
    language: 'English',
    ...SHARED_BOTS,
  },
}

export default function Page() {
  return <Insurance />
}
