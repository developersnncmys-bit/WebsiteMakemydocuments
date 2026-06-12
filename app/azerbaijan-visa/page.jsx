import View from '@/views/AzerbaijanVisa'
import { buildVisaMetadata } from '@/data/visaMeta'

export const metadata = buildVisaMetadata('azerbaijan-visa')

export default function Page() {
  return <View />
}