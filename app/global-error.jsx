'use client'

// Root-level error boundary — catches errors that escape the route boundary
// (e.g. in the root layout). Must render its own <html>/<body>. Same
// ChunkLoadError auto-reload behaviour as app/error.jsx.

import { useEffect } from 'react'

export default function GlobalError({ error }) {
  useEffect(() => {
    try {
      const KEY = 'mmd-err-reload-at'
      const last = Number(sessionStorage.getItem(KEY) || 0)
      // Auto-reload once per 20s on ANY error so a stale build self-heals,
      // without looping if the error is persistent.
      if (Date.now() - last > 20000) {
        sessionStorage.setItem(KEY, String(Date.now()))
        window.location.reload()
      }
    } catch {
      window.location.reload()
    }
  }, [error])

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>Something went wrong</h2>
          <p style={{ color: '#64748b' }}>Please reload the page.</p>
          <button
            onClick={() => window.location.reload()}
            style={{ background: '#2563eb', color: '#fff', padding: '0.6rem 1.4rem', borderRadius: '0.75rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  )
}
