import Passport from '@/views/Passport'

export const metadata = {
  title: 'Get Your Passport Fast and Hassle-Free | Expert Passport Application Assistance',
  description: 'Looking to get your passport without the hassle? Our passport services provide fast and efficient assistance with your passport application. Trust our expert passport team to handle everything, ensuring you receive your passport quickly and smoothly. Get started on your passport journey today and experience the best in passport services!',
  keywords: 'passport, get passport fast, passport application, passport services, passport assistance, hassle-free passport, quick passport, passport team, passport solutions, secure passport, professional passport services, efficient passport application',
  alternates: { canonical: 'https://www.makemydocuments.com/passport' },
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
  return <Passport />
}
