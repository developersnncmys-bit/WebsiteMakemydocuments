// Generates /sitemap.xml at build time (works with `output: 'export'`).
// The canonical host defaults to the live www domain; override with
// NEXT_PUBLIC_SITE_URL if you switch to non-www (keep it consistent with the
// canonical tags + the www↔non-www 301 redirect).
export const dynamic = 'force-static';

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.makemydocuments.com').replace(/\/$/, '');

// Public, indexable pages. Excludes transactional flows (*-form, /failure,
// /request_success) which shouldn't be indexed.
const STATIC_ROUTES = [
  '',
  'about-us', 'contact-us', 'careers', 'blogs',
  'disclaimer', 'privacy-policy', 'terms-conditions',

  // Core services
  'passport', 'apply-passport-online', 'pan-card', 'tourist-visa',
  'senior-citizen-card', 'rental-agreement', 'lease-agreement',
  'msme-registration', 'insurance', 'police-clearance', 'policeverification',
  'affidavits',

  // Insurance sub-pages
  'two-wheeler-insurance', 'four-wheeler-insurance',
  'commercial-vehicle-insurance', 'health-insurance', 'life-insurance',

  // Visa pages
  'dubai-tourist-visa', 'dubai-tourist-visa-for-indians',
  'australia-visa', 'azerbaijan-visa', 'bahrain-visa', 'egypt-visa',
  'hong-kong-tourist-visa-for-indians', 'indonesia-tourist-visa-for-indians',
  'malaysia-visa', 'morocco-visa', 'oman-visa', 'qatar-visa', 'russia-visa',
  'singapore-visa', 'uk-visa', 'uzbekistan-visa',
  'vietnam-tourist-visa', 'vietnam-tourist-visa-for-indians',

  // Passport-agent city landing pages (local SEO)
  ...[
    'ankola', 'bagalkot', 'ballari', 'bangalore', 'belagavi', 'bidar',
    'chamarajanagar', 'channapatna', 'chennai', 'chikkaballapur', 'chikkodi',
    'chitradurga', 'davangere', 'delhi', 'gadag', 'hassan', 'hubli-dharwad',
    'hyderabad', 'kalaburagi', 'koppal', 'maddur', 'mangaluru', 'mumbai',
    'mysore', 'pune', 'raichur', 'robertsonpet', 'shivamogga', 'tumakuru',
    'udupi', 'vijayapura',
  ].map((c) => `passport-agent-in-${c}`),
];

export default async function sitemap() {
  const now = new Date();

  // Blog detail pages live in their own /blog-sitemap.xml (see
  // app/blog-sitemap.xml/route.js), referenced from robots.txt.
  const urls = STATIC_ROUTES.map((r) => ({
    url: r ? `${SITE}/${r}` : `${SITE}/`,
    lastModified: now,
    changeFrequency: r === '' || r === 'blogs' ? 'daily' : 'weekly',
    priority: r === '' ? 1 : 0.7,
  }));

  return urls;
}
