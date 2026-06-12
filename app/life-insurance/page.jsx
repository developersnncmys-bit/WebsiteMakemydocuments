import LifeInsurance from '@/views/LifeInsurance'

export const metadata = {
  title: 'Life Insurance - Secure Your Future with the Best Plans Online',
  description: 'Get the best life insurance plans online. Comprehensive coverage, affordable premiums, tax benefits, and financial security for your family. 100% hassle-free and instant process.',
  keywords: 'life insurance, online life insurance, term life insurance, whole life insurance, best life insurance plans, life insurance online, life insurance benefits, affordable life insurance, buy life insurance, life insurance for family, life insurance with tax benefits, life policy, apply for life insurance, instant life insurance policy, secure life insurance plans',
  authors: [{ url: 'https://makemydocuments.com/life-insurance' }],
  alternates: { canonical: 'https://makemydocuments.com/life-insurance' },
  robots: 'ALL, index, follow',
  other: {
    rating: 'General',
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
  },
}

export default function Page() {
  return <LifeInsurance />
}
