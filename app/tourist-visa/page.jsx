import TouristVisa from '@/views/TouristVisa'

export const metadata = {
  title: 'Tourist Visa Online | Apply Tourist Visa for Any Country',
  description: 'Apply for tourist visas to Singapore, UK, Dubai, Australia, Malaysia, Vietnam and more — fast online process, expert assistance, and complete documentation support.',
  keywords: 'tourist visa, apply tourist visa online, visa application, Singapore visa, UK visa, Dubai visa, Australia visa, Malaysia visa, Vietnam visa, Hong Kong visa, Indonesia visa, Azerbaijan visa, Oman visa, Morocco visa, Bahrain visa, Qatar visa, Russia visa, Uzbekistan visa, tourist visa for Indians, online visa application India',
  authors: [{ url: 'https://www.makemydocuments.com/tourist-visa' }],
  alternates: { canonical: 'https://www.makemydocuments.com/tourist-visa' },
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
    'Googlebot-Image': 'All',
    Slurp: 'All',
    Scooter: 'All',
    WEBCRAWLERS: 'All',
  },
}

export default function Page() {
  return <TouristVisa />
}
