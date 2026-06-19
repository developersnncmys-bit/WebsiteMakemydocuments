import Affidavits from '@/views/Affidavits'

export const metadata = {
  title: ' Name Change Affidavit Online|Draft In 60 Minutes|Delivery Within 24 Hours',
  description: 'Click here to apply name change affidavir and get it the earliest,with expertise advice and guidance. And get newspaper publication online',
  keywords: ' name change affidavit, name change affidavit online, how to get name change affidavit, how to create name change affidavit, create name change affidavit ',
  authors: [{ url: 'https://www.makemydocuments.com/name-change-affidavit' }],
  alternates: { canonical: 'https://www.makemydocuments.com/affidavits' },
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
  return <Affidavits />
}
