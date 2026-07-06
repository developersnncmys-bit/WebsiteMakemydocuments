import AboutUs from '@/views/AboutUs'

export const metadata = {
  title: 'About Make My Documents | Trusted Document Consultancy',
  description: 'Make My Documents is a trusted online platform for PAN card, passport, visa, insurance & senior citizen card services — fast, simple & hassle-free.',
  keywords: 'about Make My Documents, document consultancy, online document services, PAN card, passport, insurance, senior citizen card, document support, hassle-free documentation',
  authors: [{ url: 'https://www.makemydocuments.com/about-us' }],
  alternates: { canonical: 'https://www.makemydocuments.com/about-us' },
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
  return <AboutUs />
}
