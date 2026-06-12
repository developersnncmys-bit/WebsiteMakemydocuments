'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { fetchBlogPosts } from '../data/blogPosts'

// Same category palette as the main /blogs page so the tag colours match.
const CAT_STYLE = {
  'Passport':                     { bg: 'var(--teal-bg)',  bd: 'var(--teal-bd)',  color: 'var(--teal-dk)' },
  'Tourist Visa':                 { bg: 'var(--amber-bg)', bd: 'var(--amber-bd)', color: '#92570a'         },
  'PAN Card':                     { bg: '#ede9fe',         bd: '#c4b5fd',         color: '#6d28d9'         },
  'Senior Citizen Card':          { bg: 'var(--green-bg)', bd: 'var(--green-bd)', color: 'var(--green)'    },
  'Insurance':                    { bg: '#e0f2fe',         bd: '#7dd3fc',         color: '#0369a1'         },
  'Rental Agreement':             { bg: '#fff7ed',         bd: '#fed7aa',         color: '#c2410c'         },
  'Lease Agreement':              { bg: '#fdf4ff',         bd: '#d8b4fe',         color: '#86198f'         },
  'Police Verification':          { bg: '#f0fdf4',         bd: '#86efac',         color: '#166534'         },
  'MSME Certificate':             { bg: '#eef2ff',         bd: '#a5b4fc',         color: '#3730a3'         },
  'Police Clearance Certificate': { bg: '#eff6ff',         bd: '#93c5fd',         color: '#1d4ed8'         },
  'Affidavits / Annexure':        { bg: 'var(--surf)',     bd: 'var(--line)',      color: 'var(--ink3)'     },
}

const catStyle = (cat) => {
  const s = CAT_STYLE[cat] || { bg: 'var(--surf)', bd: 'var(--line)', color: 'var(--ink3)' }
  return { background: s.bg, borderColor: s.bd, color: s.color }
}

function BlogCard({ post }) {
  const { Icon } = post
  return (
    <Link href={`/blogs/${post.slug}`} className="bl-card">
      <div className="bl-img" style={{ background: post.gradient }}>
        <div className="bl-img-overlay" />
        {Icon && <Icon size={52} strokeWidth={.8} color="rgba(255,255,255,.18)" className="bl-img-ico" />}
        <div className="bl-img-top">
          <span className="bl-cat-tag" style={catStyle(post.cat)}>{post.cat}</span>
        </div>
      </div>
      <div className="bl-body">
        <div className="bl-read-time"><Clock size={11} strokeWidth={2} />{post.readTime} read</div>
        <h3 className="bl-title">{post.title}</h3>
        <p className="bl-excerpt">{post.excerpt}</p>
        <div className="bl-link">Read More <ArrowRight size={13} strokeWidth={2.5} /></div>
      </div>
    </Link>
  )
}

// Renders an "Explore Our Latest Blogs" section for a given service category.
// Pulls the full blog list via `fetchBlogPosts()` (backend + bundled fallback),
// filters to the category, sorts newest-first by createdAt, and shows up to
// `limit` cards. Hides itself when nothing matches so the page doesn't render
// an empty band.
export default function RelatedBlogs({ category, title = 'Explore Our Latest Blogs', limit = 3 }) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    fetchBlogPosts()
      .then((data) => {
        if (cancelled) return
        const ts = (p) => {
          const t = Date.parse(p.createdAt || p.date)
          return isNaN(t) ? 0 : t
        }
        const filtered = Array.isArray(data)
          ? data.filter((p) => p.cat === category).sort((a, b) => ts(b) - ts(a))
          : []
        setPosts(filtered)
      })
      .catch(() => {})
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [category])

  if (loading) return null
  if (posts.length === 0) return null

  const visible = posts.slice(0, limit)

  return (
    <section className="bl-section" style={{ paddingTop: 48, paddingBottom: 56 }}>
      <div className="mx">
        <div className="bd-related-head" style={{ marginBottom: 24 }}>
          <div>
            <h2 className="bd-related-h2">{title}</h2>
            <p className="bd-related-sub">
              {posts.length} article{posts.length === 1 ? '' : 's'} on {category}
            </p>
          </div>
          <Link href="/blogs" className="bd-related-all">View All →</Link>
        </div>
        <div className="bl-grid">
          {visible.map((p) => <BlogCard key={p.id} post={p} />)}
        </div>
      </div>
    </section>
  )
}
