import Link from 'next/link'

export default function NotFound() {
  return (
    <main style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 20px', textAlign: 'center' }}>
      <div>
        <h1 style={{ fontSize: 64, fontWeight: 800, color: '#1A3D6E', margin: 0 }}>404</h1>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 8 }}>Page not found</h2>
        <p style={{ color: '#64748b', marginTop: 8, maxWidth: 420 }}>
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          style={{ display: 'inline-block', marginTop: 24, background: '#2E68B1', color: '#fff', padding: '12px 24px', borderRadius: 12, textDecoration: 'none', fontWeight: 600 }}
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
