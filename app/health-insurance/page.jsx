import HealthInsurance from '@/views/HealthInsurance'

export const metadata = {
  title: 'Health Insurance - Buy/Renew Health Policy Online',
  description: 'Get the best health insurance plans instantly. Comprehensive coverage, cashless claims, tax benefits, and instant policy download. 100% online and hassle-free process.',
  keywords: 'health insurance, online health insurance, family health insurance, individual health insurance, health insurance plans, affordable health insurance, medical insurance online, health policy, health insurance renewal, cashless health insurance, buy health insurance online, health coverage, health insurance benefits, apply health insurance, tax-saving health insurance, best health insurance',
  authors: [{ url: 'https://makemydocuments.com/health-insurance' }],
  alternates: { canonical: 'https://makemydocuments.com/health-insurance' },
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
  return <HealthInsurance />
}
