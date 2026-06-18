'use client'

// Route-level error boundary. The most common cause of an intermittent
// "Something went wrong" on a static site is a STALE BUILD: a new deploy
// replaced the HTML/JS this tab was using, so a code-split chunk it loads no
// longer exists (ChunkLoadError) — or a transient hiccup. A reload fetches the
// fresh build and fixes it, so we auto-reload ONCE on ANY error. If the error
// recurs within the throttle window (the reload didn't help → a real bug), we
// stop and show the button instead of looping.

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    try {
      const KEY = 'mmd-err-reload-at'
      const last = Number(sessionStorage.getItem(KEY) || 0)
      // Reload at most once per 20s so a persistent error can't loop forever.
      if (Date.now() - last > 20000) {
        sessionStorage.setItem(KEY, String(Date.now()))
        window.location.reload()
      }
    } catch {
      window.location.reload()
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
