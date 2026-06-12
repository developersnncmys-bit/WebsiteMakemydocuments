'use client'

import { useEffect, useState } from 'react'
import { fetchBlogPosts } from '../data/blogPosts'
import BlogCard from './BlogCard'

// Fetches all published blog posts (same source as the /blogs page) and renders
// up to `count` that match `category`. Only posts in the matching category are
// shown — no fallback to unrelated posts. If the category has no posts yet, the
// section renders nothing.
export default function BlogGridByCategory({ category, count = 3 }) {
  const [picks, setPicks] = useState([])

  useEffect(() => {
    let active = true
    fetchBlogPosts().then(all => {
      if (!active) return
      const ts = p => {
        const t = Date.parse(p.createdAt || p.date)
        return isNaN(t) ? 0 : t
      }
      const latest = all
        .filter(p => p.cat === category)
        .sort((a, b) => ts(b) - ts(a))
        .slice(0, count)
      setPicks(latest)
    })
    return () => { active = false }
  }, [category, count])

  if (picks.length === 0) return null

  return (
    <div className="blog-grid">
      {picks.map(p => <BlogCard key={p.slug} post={p} />)}
    </div>
  )
}
