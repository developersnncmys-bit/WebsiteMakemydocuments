'use client'

// Route-level error boundary. The most common cause of an intermittent
// "Application error: a client-side exception" on a static site is a
// ChunkLoadError: a new deploy replaced the JS files this browser tab was
// using, so a code-split chunk it tries to load no longer exists. Reloading
// fetches the fresh build and fixes it — so we do that automatically (guarded
// against a reload loop). Any other error shows a friendly Reload button
// instead of a blank white screen.

import { useEffect } from 'react'

const isChunkError = (error) => {
  const s = `${error?.name || ''} ${error?.message || ''}`
  return /chunkloaderror|loading chunk|dynamically imported module|importing a module script failed/i.test(s)
}

export default function Error({ error, reset }) {
  useEffect(() => {
    if (isChunkError(error)) {
      try {
        const KEY = 'mmd-chunk-reload-at'
        const last = Number(sessionStorage.getItem(KEY) || 0)
        // Reload at most once per 10s so a persistent error can't loop forever.
        if (Date.now() - last > 10000) {
          sessionStorage.setItem(KEY, String(Date.now()))
          window.location.reload()
        }
      } catch {
        window.location.reload()
      }
    }
  }, [error])

  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>Something went wrong</h2>
      <p style={{ color: '#64748b', maxWidth: '28rem' }}>
        The page didn’t load correctly. This usually fixes itself with a reload.
      </p>
      <button
        onClick={() => { try { reset() } catch { window.location.reload() } }}
        style={{ background: '#2563eb', color: '#fff', padding: '0.6rem 1.4rem', borderRadius: '0.75rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}
      >
        Reload
      </button>
    </div>
  )
}
