// Per-country visa metadata. Each Next.js page imports buildVisaMetadata(slug)
// from this file so the per-page title/description/keywords/canonical stay in
// one place and the common bot directives don't get duplicated across files.

const COMMON_OTHER = {
  rating: 'general',
  'revisit-after': '2 days',
  distribution: 'Global',
  language: 'English',
  GOOGLEBOTS: 'All, FOLLOW',
  YAHOOBOTS: 'All, FOLLOW',
  MSNBOTS: 'All, FOLLOW',
  BINGBOTS: 'All, FOLLOW',
  'Googlebot-Image': 'All',
  Slurp: 'All',
  Scooter: 'All',
  WEBCRAWLERS: 'All',
}

const visaMetaTags = {
  'dubai-visa': {
    title: 'Dubai Visa Application | Apply for Dubai Tourist Visa Online',
    description: 'Apply for a Dubai tourist visa online with expert guidance. Get your Dubai visa quickly for 30, 60, or 90 days, with both single and multiple entry options.',
    keywords: 'Dubai visa, UAE visa, Dubai tourist visa online, Dubai visa for Indians, Dubai visa application, UAE tourist visa, Dubai visa cost, how to apply for Dubai visa, Dubai visit visa, UAE visa online, Dubai visa types, apply Dubai visa',
    canonical: 'https://www.makemydocuments.com/dubai-visa',
  },
  'singapore-visa': {
    title: 'Singapore visa | Singapore tourist visa application Online | Apply Now',
    description: 'Click here to apply Singapore visa online and get it the earliest, with expertise advice and guidance. Get Singapore Visa for Indians in just 3-5 days! Apply Now!',
    keywords: 'Singapore visa, Singapore Visa For Indians, Singapore Visa Online, Singapore Tourist Visa, Singapore Visa Fees, Apply Singapore Visa Online, How to apply for Singapore visa, how to get Singapore visa.',
    canonical: 'https://www.makemydocuments.com/singapore-visa',
  },
  'uk-visa': {
    title: 'Apply UK Visa Online | UK Tourist Visa | UK Visa Application',
    description: 'Click here to apply for a UK Visa and get it at the earliest with expert advice and guidance. Hassle-free UK Tourist Visa application process.',
    keywords: 'UK visa, apply UK visa, UK visa online, UK visa application, UK visa apply online, UK tourist visa, UK business visa, UK visa agents near me, how to apply for UK visa, UK visa application process, documents required for UK visa, UK visa form, UK visa agents Bangalore, UK visa fees, UK visa online application India, UK visa site, UK visa application status, apply for UK tourist visa, UK visa process, UK visa services',
    canonical: 'https://www.makemydocuments.com/uk-visa',
  },
  'australia-visa': {
    title: 'Australia Visa Application | Apply for Australian Tourist & Visitor Visa Online',
    description: 'Apply for your Australian tourist visa online with fast processing and expert guidance. Get your 3, 6, or 12-month single or multiple entry visa for Australia. Hassle-free application process.',
    keywords: 'Australia visa, Australia visa online, apply for Australia visa, Australian tourist visa, Australia visa for Indians, Australia visitor visa, Australia visa cost, how to apply for Australia visa, Australian visa application, Australia visa requirements, online Australia visa application, Australia e-visa, Australia travel visa, Australian visa guide',
    canonical: 'https://www.makemydocuments.com/australia-visa',
  },
  'malaysia-visa': {
    title: 'Malaysia Visa Application | Apply for Malaysian Tourist & Visitor Visa Online',
    description: 'Apply for your Malaysian visa online with easy processing and expert guidance. Get your 30, 60, or 90-day single or multiple entry visa for Malaysia. Fast, secure, and hassle-free visa application process.',
    keywords: 'Malaysia visa, Malaysia visa online, apply for Malaysia visa, Malaysian tourist visa, Malaysia visa for Indians, Malaysia visitor visa, Malaysia visa cost, how to apply for Malaysia visa, Malaysia visa application, Malaysia e-visa, Malaysia travel visa, Malaysian visa requirements, online Malaysia visa application, Malaysian visa guide',
    canonical: 'https://www.makemydocuments.com/malaysia-visa',
  },
  'egypt-visa': {
    title: 'Egypt Visa Application | Apply for Egyptian Tourist & Visitor Visa Online',
    description: 'Streamline your travel plans to Egypt with our easy online visa application service. Whether you need a tourist visa or visitor visa, we provide tailored assistance for single or multiple entry visas, valid for 30, 60, or 90 days. Fast, secure, and hassle-free application process for all your Egypt travel needs.',
    keywords: 'Egypt visa, Egypt visa online, apply for Egypt visa, Egyptian tourist visa, Egypt visa for Indians, Egypt visitor visa, Egypt visa cost, how to apply for Egypt visa, Egypt visa application, Egypt e-visa, Egypt travel visa, Egyptian visa requirements, online Egypt visa application, Egyptian visa guide',
    canonical: 'https://www.makemydocuments.com/egypt-visa',
  },
  'vietnam-visa': {
    title: 'Vietnam Visa Application | Apply for Vietnamese Tourist & Visitor Visa Online',
    description: 'Easily apply for your Vietnam tourist or visitor visa online with expert guidance. Secure a single or multiple entry visa for Vietnam, valid for 30, 60, or 90 days. Fast, straightforward, and secure application process designed for your travel convenience.',
    keywords: 'Vietnam visa, Vietnam visa online, apply for Vietnam visa, Vietnamese tourist visa, Vietnam visa for Indians, Vietnam visitor visa, Vietnam visa cost, how to apply for Vietnam visa, Vietnam visa application, Vietnam e-visa, Vietnam travel visa, Vietnamese visa requirements, online Vietnam visa application, Vietnamese visa guide',
    canonical: 'https://www.makemydocuments.com/vietnam-visa',
  },
  'hongkong-visa': {
    title: 'Hong Kong Visa Application | Apply for Hong Kong Tourist & Visitor Visa Online',
    description: 'Apply for your Hong Kong tourist or visitor visa with ease. Our expert assistance ensures a simple, fast, and secure application process for single or multiple entry visas. Tailored solutions for your Hong Kong travel plans.',
    keywords: 'Hong Kong visa, Hong Kong visa online, apply for Hong Kong visa, Hong Kong tourist visa, Hong Kong visa for Indians, Hong Kong visitor visa, Hong Kong visa cost, how to apply for Hong Kong visa, Hong Kong visa application, Hong Kong e-visa, Hong Kong travel visa, Hong Kong visa requirements, online Hong Kong visa application, Hong Kong visa guide',
    canonical: 'https://www.makemydocuments.com/hongkong-visa',
  },
  'indonesia-visa': {
    title: 'Indonesia Visa Application | Apply for Indonesian Tourist & Visitor Visa Online',
    description: 'Discover a seamless way to apply for your Indonesia visa online. Our expert team ensures a smooth process for obtaining tourist and visitor visas. Whether you’re planning a short stay or longer visit, we offer hassle-free visa solutions for single and multiple entry to Indonesia.',
    keywords: 'Indonesia visa, Indonesia visa online, apply for Indonesia visa, Indonesian tourist visa, Indonesia visa for Indians, Indonesia visitor visa, Indonesia visa cost, how to apply for Indonesia visa, Indonesia visa application, Indonesia e-visa, Indonesia travel visa, Indonesian visa requirements, online Indonesia visa application, Indonesia visa guide',
    canonical: 'https://www.makemydocuments.com/indonesia-visa',
  },
  'azerbaijan-visa': {
    title: 'Azerbaijan Visa Application | Apply for Azerbaijani Tourist & Visitor Visa Online',
    description: 'Easily apply for your Azerbaijan tourist or visitor visa online with our expert assistance. We simplify the application process for both single and multiple entry visas, ensuring a fast, secure, and efficient solution for your travel to Azerbaijan.',
    keywords: 'Azerbaijan visa, Azerbaijan visa online, apply for Azerbaijan visa, Azerbaijani tourist visa, Azerbaijan visa for Indians, Azerbaijan visitor visa, Azerbaijan visa cost, how to apply for Azerbaijan visa, Azerbaijan visa application, Azerbaijan e-visa, Azerbaijan travel visa, Azerbaijani visa requirements, online Azerbaijan visa application, Azerbaijan visa guide',
    canonical: 'https://www.makemydocuments.com/azerbaijan-visa',
  },
  'oman-visa': {
    title: 'Oman Visa Application | Apply for Omani Tourist & Visitor Visa Online',
    description: 'Quickly apply for your Oman tourist or visitor visa online with expert guidance. Enjoy a simple, secure, and fast application process for both single and multiple entry visas. Get your Oman visa for travel, business, or tourism with ease.',
    keywords: 'Oman visa, Oman visa online, apply for Oman visa, Omani tourist visa, Oman visa for Indians, Oman visitor visa, Oman visa cost, how to apply for Oman visa, Oman visa application, Oman e-visa, Oman travel visa, Omani visa requirements, online Oman visa application, Oman visa guide',
    canonical: 'https://www.makemydocuments.com/oman-visa',
  },
  'morocco-visa': {
    title: 'Morocco Visa Application | Apply for Moroccan Tourist & Visitor Visa Online',
    description: 'Effortlessly apply for your Morocco tourist or visitor visa online. With our expert assistance, you’ll experience a quick, secure, and hassle-free process for obtaining your visa for travel, business, or tourism to Morocco. Get your visa in just a few simple steps.',
    keywords: 'Morocco visa, Morocco visa online, apply for Morocco visa, Moroccan tourist visa, Morocco visa for Indians, Morocco visitor visa, Morocco visa cost, how to apply for Morocco visa, Morocco visa application, Morocco e-visa, Morocco travel visa, Moroccan visa requirements, online Morocco visa application, Morocco visa guide',
    canonical: 'https://www.makemydocuments.com/morocco-visa',
  },
  'bahrain-visa': {
    title: 'Bahrain Visa Application | Apply for Bahraini Tourist & Visitor Visa Online',
    description: 'Apply for your Bahrain visa with ease through our online application service. Whether you\'re traveling for tourism or leisure, our expert team ensures a smooth process for obtaining your tourist or visitor visa for Bahrain, with guaranteed fast processing and secure assistance.',
    keywords: 'Bahrain visa, Bahrain visa online, apply for Bahrain visa, Bahraini tourist visa, Bahrain visa for Indians, Bahrain visitor visa, Bahrain visa cost, how to apply for Bahrain visa, Bahrain visa application, Bahrain e-visa, Bahrain travel visa, Bahraini visa requirements, online Bahrain visa application, Bahrain visa guide',
    canonical: 'https://www.makemydocuments.com/bahrain-visa',
  },
  'qatar-visa': {
    title: 'Qatar Visa Application | Apply for Qatar Tourist Visa Online',
    description: 'Apply for your Qatar tourist visa easily with our online service. Enjoy a fast, secure, and hassle-free application process for your Qatar visa. Whether you\'re traveling for sightseeing or leisure, we provide expert assistance to ensure a smooth experience.',
    keywords: 'Qatar visa, Qatar tourist visa, apply for Qatar tourist visa, Qatar visa online, Qatar visa for Indians, Qatar visitor visa, Qatar visa application, Qatar e-visa, Qatar travel visa, Qatar visa cost, Qatar visa requirements, Qatar tourist visa application, Qatar visa guide, online Qatar visa',
    canonical: 'https://www.makemydocuments.com/qatar-visa',
  },
  'russia-visa': {
    title: 'Russia Visa Application | Apply for Russia Tourist Visa Online',
    description: 'Easily apply for your Russia tourist visa online with our expert assistance. Our secure and fast visa application process ensures a smooth experience for sightseeing or leisure travel to Russia. Get your tourist visa in just a few simple steps.',
    keywords: 'Russia visa, Russia tourist visa, apply for Russia tourist visa, Russia visa online, Russian tourist visa for Indians, Russia visitor visa, Russia visa cost, how to apply for Russia visa, Russia visa application, Russia e-visa, Russia travel visa, Russian visa requirements, online Russia visa application, Russia tourist visa guide',
    canonical: 'https://www.makemydocuments.com/russia-visa',
  },
  'uzbekistan-visa': {
    title: 'Uzbekistan Visa Application | Apply for Uzbekistan Tourist Visa Online',
    description: 'Apply for your Uzbekistan tourist visa easily with our fast, secure, and expert online application service. Whether you\'re visiting for sightseeing, leisure, or cultural exploration, we provide a hassle-free process for obtaining your Uzbekistan visa.',
    keywords: 'Uzbekistan visa, Uzbekistan tourist visa, apply for Uzbekistan tourist visa, Uzbekistan visa online, Uzbekistan visa for Indians, Uzbekistan visitor visa, Uzbekistan visa cost, how to apply for Uzbekistan visa, Uzbekistan visa application, Uzbekistan e-visa, Uzbekistan travel visa, Uzbek visa requirements, online Uzbekistan visa application, Uzbekistan visa guide',
    canonical: 'https://www.makemydocuments.com/uzbekistan-visa',
  },
}

export function buildVisaMetadata(slug) {
  const m = visaMetaTags[slug]
  if (!m) return undefined
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    authors: [{ url: m.canonical }],
    alternates: { canonical: m.canonical },
    robots: 'ALL, index, follow',
    other: COMMON_OTHER,
  }
}
