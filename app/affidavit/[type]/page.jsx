import { AFFIDAVIT_TYPES, getAffidavitBySlug } from '@/data/affidavitTypes'
import AffidavitForm from '@/views/AffidavitForm'

export function generateStaticParams() {
  return AFFIDAVIT_TYPES.map(a => ({ type: a.slug }))
}

export async function generateMetadata({ params }) {
  const { type } = await params
  const a = getAffidavitBySlug(type)
  const name = a ? a.value : 'Affidavit'
  return {
    title: `${name} Online | Make My Documents`,
    description: a ? `${a.desc} Apply for ${name} online — legal drafting, notarisation, and doorstep delivery by Make My Documents.` : 'Apply for affidavits online — legal drafting, notarisation, and doorstep delivery by Make My Documents.',
    alternates: { canonical: `https://www.makemydocuments.com/affidavit/${type}` },
    robots: 'noindex, nofollow',
  }
}

export default function Page() {
  return <AffidavitForm />
}
