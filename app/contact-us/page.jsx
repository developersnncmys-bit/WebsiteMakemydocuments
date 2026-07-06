import ContactUs from '@/views/ContactUs'

export const metadata = {
  title: 'Contact Make My Documents | Passport, PAN & Visa Help',
  description: 'Contact Make My Documents for help with passport, PAN card, visa, insurance & senior citizen card services. Fast, reliable support — reach us today.',
  keywords: 'contact Make My Documents, document consultancy, PAN card help, passport assistance, insurance services, senior citizen card, travel visa support, PCC, PVC',
  authors: [{ url: 'https://www.makemydocuments.com/' }],
  alternates: { canonical: 'https://www.makemydocuments.com/contact-us' },
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
  return <ContactUs />
}
