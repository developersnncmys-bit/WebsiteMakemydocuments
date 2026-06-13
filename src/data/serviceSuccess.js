// Per-service success-page content. Slug values must match exactly what
// `pg.controller.js#normalizeService` produces (lowercase, non-alphanumeric
// stripped).
//
// Images: matches the live site — PAN gets pancardsuccess.svg, Senior Citizen
// gets seniorcitizensuccess.svg, everything else gets defultsuccessimage.svg.
// (Three 3D SVG illustrations downloaded from makemydocuments.com.)

const WHATSAPP = 'https://wa.me/919980097315'
const SUPPORT_PHONE = '+91 99800 97315'

const IMG_PAN = '/pancardsuccess.svg'
const IMG_SENIOR = '/seniorcitizensuccess.svg'
const IMG_DEFAULT = '/defultsuccessimage.svg'

// Standard CTA for services where the customer needs to send documents.
const WHATSAPP_CTA = {
  href: WHATSAPP,
  label: 'Upload your documents via WhatsApp',
}

const docService = (slug, label, home) => ({
  slug, label, home,
  image: IMG_DEFAULT,
  message: `We have received your ${label} application. One of our consultants will get back to you shortly.`,
  cta: WHATSAPP_CTA,
})

export const SERVICES = [
  {
    slug: 'pancard',
    label: 'PAN Card',
    home: '/pan-card',
    image: IMG_PAN,
    message:
      'We have received your PAN card application. Please upload your documents via WhatsApp for eKYC and eSign to process further.',
    cta: WHATSAPP_CTA,
  },
  {
    slug: 'seniorcitizencard',
    label: 'Senior Citizen Card',
    home: '/senior-citizen-card',
    image: IMG_SENIOR,
    message:
      'We have received your Senior Citizen Card application. Please upload your documents via WhatsApp for eKYC and eSign to process further.',
    cta: WHATSAPP_CTA,
  },
  // Everything else uses the default illustration. Message matches the live
  // site's generic copy.
  ...[
    ['passport', 'Passport', '/passport'],
    ['rentalagreement', 'Rental Agreement', '/rental-agreement'],
    ['leaseagreement', 'Lease Agreement', '/lease-agreement'],
    ['msmeregistration', 'MSME Registration', '/msme-registration'],
    ['policeclearancecertificatepcc', 'Police Clearance Certificate (PCC)', '/police-clearance'],
    ['policeverificationcertificatepvc', 'Police Verification Certificate (PVC)', '/policeverification'],
    ['affidavitsannexure', 'Affidavit', '/affidavits'],
    // Visas
    ['australiatouristvisa', 'Australia Tourist Visa', '/australia-visa'],
    ['azerbaijantouristvisa', 'Azerbaijan Tourist Visa', '/azerbaijan-visa'],
    ['bahraintouristvisa', 'Bahrain Tourist Visa', '/bahrain-visa'],
    ['dubaitouristvisa', 'Dubai Tourist Visa', '/dubai-tourist-visa'],
    ['egypttouristvisa', 'Egypt Tourist Visa', '/egypt-visa'],
    ['hongkongtouristvisa', 'Hong Kong Tourist Visa', '/hong-kong-tourist-visa-for-indians'],
    ['indonesiatouristvisa', 'Indonesia Tourist Visa', '/indonesia-tourist-visa-for-indians'],
    ['malaysiatouristvisa', 'Malaysia Tourist Visa', '/malaysia-visa'],
    ['moroccotouristvisa', 'Morocco Tourist Visa', '/morocco-visa'],
    ['omantouristvisa', 'Oman Tourist Visa', '/oman-visa'],
    ['qatartouristvisa', 'Qatar Tourist Visa', '/qatar-visa'],
    ['russiatouristvisa', 'Russia Tourist Visa', '/russia-visa'],
    ['singaporetouristvisa', 'Singapore Tourist Visa', '/singapore-visa'],
    ['uktouristvisa', 'UK Tourist Visa', '/uk-visa'],
    ['uzbekistantouristvisa', 'Uzbekistan Tourist Visa', '/uzbekistan-visa'],
    ['vietnamtouristvisa', 'Vietnam Tourist Visa', '/vietnam-tourist-visa'],
    // Insurance (free quote flows)
    ['healthinsurance', 'Health Insurance', '/health-insurance'],
    ['lifeinsurance', 'Life Insurance', '/life-insurance'],
    ['twowheelerinsurance', 'Two Wheeler Insurance', '/two-wheeler-insurance'],
    ['fourwheelerinsurance', 'Four Wheeler Insurance', '/four-wheeler-insurance'],
    ['commercialvehicleinsurance', 'Commercial Vehicle Insurance', '/commercial-vehicle-insurance'],
  ].map(([slug, label, home]) => docService(slug, label, home)),
  // Catch-all
  {
    slug: 'general',
    label: 'Request',
    home: '/',
    image: IMG_DEFAULT,
    message: 'We have received your request. One of our consultants will get back to you shortly.',
    cta: null,
  },
]

export const SUPPORT = { phone: SUPPORT_PHONE, whatsapp: WHATSAPP }

export const getService = (slug) =>
  SERVICES.find((s) => s.slug === String(slug || '').toLowerCase()) ||
  SERVICES[SERVICES.length - 1]
