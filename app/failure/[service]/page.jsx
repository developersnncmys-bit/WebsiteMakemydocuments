import { SERVICES, getService } from '@/data/serviceSuccess'
import RequestFailure from '@/views/RequestFailure'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }))
}

export async function generateMetadata({ params }) {
  const { service } = await params
  const svc = getService(service)
  return {
    title: `Payment Failed — ${svc.label} | Make My Documents`,
    robots: 'noindex, nofollow',
  }
}

export default async function Page({ params }) {
  const { service } = await params
  return <RequestFailure slug={service} />
}
