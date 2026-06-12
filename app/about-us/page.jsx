import AboutUs from '@/views/AboutUs'

export const metadata = {
  title: 'About Us | Make My Documents™ - Your Trusted Online Document Consultancy',
  description: 'Learn about Make My Documents™, a trusted online platform simplifying document-related services like PAN card, Passport, Insurance, and Senior Citizen Cards. Your hassle-free solution to all documentation needs.',
  keywords: 'about Make My Documents, document consultancy, online document services, PAN card, passport, insurance, senior citizen card, document support, hassle-free documentation',
  authors: [{ url: 'https://makemydocuments.com/about-us' }],
  alternates: { canonical: 'https://makemydocuments.com/about-us' },
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
