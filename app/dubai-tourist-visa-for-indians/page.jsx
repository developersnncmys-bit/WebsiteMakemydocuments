import View from '@/views/UAEVisa'
import { buildVisaMetadata } from '@/data/visaMeta'

export const metadata = buildVisaMetadata('dubai-visa')

export default function Page() {
  return <View />
}