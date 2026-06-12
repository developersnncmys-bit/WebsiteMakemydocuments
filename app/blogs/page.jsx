import Blogs from '@/views/Blogs'

export const metadata = {
  title: 'Make My Documents Blog | Expert Tips on Document Services',
  description: 'Explore our blog for expert tips and insights on document services like PAN cards, passports, visas, MSME certificates, and more.',
  alternates: { canonical: 'https://makemydocuments.com/blogs' },
}

// Fetch the published blog list at build time so the Blog JSON-LD is baked
// into the static HTML for crawlers. Same retry pattern as
// app/blogs/[slug]/page.jsx generateStaticParams so a sleeping backend
// doesn't strip the schema out of the build.
async function fetchPublishedBlogs() {
  const base = process.env.NEXT_PUBLIC_API_URL || 'https://mmdbackend.onrender.com'
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const ctrl = new AbortController()
      const timer = setTimeout(() => ctrl.abort(), 60_000)
      const res = await fetch(`${base}/api/blogs?status=published`, { signal: ctrl.signal })
      clearTimeout(timer)
      const json = await res.json()
      if (json && json.success && Array.isArray(json.data)) return json.data
    } catch (err) {
      console.warn(`[blogs/page] fetch attempt ${attempt} failed:`, err && err.message)
      if (attempt < 4) await new Promise(r => setTimeout(r, 5_000))
    }
  }
  return []
}

export default async function Page() {
  const blogs = await fetchPublishedBlogs()

  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Make My Documents Blog',
    description: 'Explore expert advice on documents like PAN cards, passports, visas, MSME certifications, and more.',
    url: 'https://makemydocuments.com/blogs',
    blogPost: blogs.slice(0, 12).map((blog) => ({
      '@type': 'BlogPosting',
      headline: blog.metaTitle || blog.title || '',
      description: blog.metaDescription || blog.excerpt || '',
      url: `https://makemydocuments.com/blogs/${blog.slug || ''}`,
      image: blog.image ? `https://api.makemydocuments.com/uploads/blogs/${blog.image}` : undefined,
      author: { '@type': 'Person', name: 'Make My Documents' },
      publisher: {
        '@type': 'Organization',
        name: 'Make My Documents',
        logo: {
          '@type': 'ImageObject',
          url: 'https://makemydocuments.com/static/media/logo.31258f6da87268f7ee2d04f6f96e256d.svg',
        },
      },
      datePublished: blog.createdAt || '',
      dateModified: blog.createdAt || '',
    })),
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://makemydocuments.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blogs', item: 'https://makemydocuments.com/blogs' },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Blogs />
    </>
  )
}
