import { SERVICES, getService } from '@/data/serviceSuccess'
import RequestSuccess from '@/views/RequestSuccess'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }))
}

export async function generateMetadata({ params }) {
  const { service } = await params
  const svc = getService(service)
  return {
    title: `${svc.title} | Make My Documents`,
    description: svc.message,
    robots: 'noindex, nofollow',
  }
}

export default async function Page({ params }) {
  const { service } = await params
  return <RequestSuccess slug={service} />
}
