import ContactUs from '@/views/ContactUs'

export const metadata = {
  title: 'Contact Us | Make My Documents™ | Get Assistance with Visa, Passport & More',
  description: 'Reach out to Make My Documents for hassle-free assistance with PAN cards, passports, travel visas, senior citizen cards, insurance policies, and more. Contact us today!',
  keywords: 'contact Make My Documents, document consultancy, PAN card help, passport assistance, insurance services, senior citizen card, travel visa support, PCC, PVC',
  authors: [{ url: 'https://makemydocuments.com/' }],
  alternates: { canonical: 'https://makemydocuments.com/contact-us' },
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
