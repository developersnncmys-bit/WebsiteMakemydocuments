import BlogDetail from '@/views/BlogDetail'

const SLUGS = [
  'how-to-apply-for-passport-online-india-2026',
  'vietnam-tourist-visa-indians-2026-guide',
  'pan-card-new-rules-april-2026',
  'senior-citizen-card-bangalore-online-documents-benefits',
  'dubai-tourist-visa-from-india-2026',
  'how-to-apply-pan-card-online-india',
  'complete-guide-vehicle-health-insurance-india',
  'rental-agreement-bangalore-legal-requirements-format-fees',
  'msme-registration-online-india-2026',
  'police-clearance-certificate-india-2026',
  'police-verification-certificate-passport-process',
  'lease-agreement-vs-rental-agreement-differences',
]

export async function generateStaticParams() {
  // Pre-generate a page for every bundled slug plus every published blog in the
  // backend at build time. New blogs added later need a rebuild to get their own
  // static page (the static export can't create routes at runtime).
  //
  // The backend runs on Render's free tier which cold-starts after idle time —
  // the first request can take 30-60s. Retry a few times so a sleeping backend
  // doesn't silently strip dynamic slugs out of the build.
  const base = process.env.NEXT_PUBLIC_API_URL || 'https://mmdbackend.onrender.com'
  let slugs = [...SLUGS]
  let apiSlugs = []

  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const ctrl = new AbortController()
      const timer = setTimeout(() => ctrl.abort(), 60_000)
      const res = await fetch(`${base}/api/blogs?status=published`, { signal: ctrl.signal })
      clearTimeout(timer)
      const json = await res.json()
      if (json && json.success && Array.isArray(json.data)) {
        apiSlugs = json.data.map(b => b.slug).filter(Boolean)
        console.log(`[generateStaticParams] attempt ${attempt}: fetched ${apiSlugs.length} blog slugs from API`)
        break
      }
      console.warn(`[generateStaticParams] attempt ${attempt}: API responded but payload was unexpected`)
    } catch (err) {
      console.warn(`[generateStaticParams] attempt ${attempt} failed:`, err && err.message)
      if (attempt < 4) await new Promise(r => setTimeout(r, 5_000))
    }
  }

  slugs = Array.from(new Set([...slugs, ...apiSlugs]))
  // Always include the FALLBACK_SLUG shell so the Netlify rewrite in
  // netlify.toml can serve it for blogs added after this build.
  // BlogDetail reads the real slug from `useParams()` at hydration and
  // fetches the content from the backend, so any unknown slug still works.
  const FALLBACK_SLUG = '__blog_fallback'
  if (!slugs.includes(FALLBACK_SLUG)) slugs.push(FALLBACK_SLUG)
  console.log(`[generateStaticParams] generating ${slugs.length} static blog pages total`)
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const base = process.env.NEXT_PUBLIC_API_URL || 'https://mmdbackend.onrender.com'
  const canonical = `https://makemydocuments.com/blogs/${slug}`
  const fallback = {
    title: 'Make My Documents Blog | Expert Tips on Document Services',
    description: 'Read expert guides on passports, visas, PAN cards, MSME certificates, insurance, and more from Make My Documents.',
    alternates: { canonical },
    robots: 'ALL, index, follow',
  }
  try {
    const res = await fetch(`${base}/api/blogs/slug/${encodeURIComponent(slug)}`)
    if (!res.ok) return fallback
    const json = await res.json()
    const b = json && json.success ? json.data : null
    if (!b) return fallback
    return {
      title: b.metaTitle || b.title || fallback.title,
      description: b.metaDescription || b.excerpt || fallback.description,
      alternates: { canonical },
      robots: 'ALL, index, follow',
    }
  } catch {
    return fallback
  }
}

export default function Page() {
  return <BlogDetail />
}
