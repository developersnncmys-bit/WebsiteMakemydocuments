import View from '@/views/UzbekistanVisa'
import { buildVisaMetadata } from '@/data/visaMeta'

export const metadata = buildVisaMetadata('uzbekistan-visa')

export default function Page() {
  return <View />
}