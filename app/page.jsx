import Home from '@/views/Home'

export const metadata = {
  title: 'Make My Documents™ | Online Document consultancy',
  description: ' Make My Documents Is The Smartest Way To Get Your Documents Done.Services: Pan card, Passport, Rental Agreement, Insurance, Senior Citizen Card, Etc. ',
  keywords: 'make my documents, passport, pan card, rental agreement, senior citzen card, bike insurance, car insurance, health insurance,  food license',
  authors: [{ url: 'https://makemydocuments.com/' }],
  alternates: { canonical: 'https://makemydocuments.com/' },
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
  return <Home />
}
