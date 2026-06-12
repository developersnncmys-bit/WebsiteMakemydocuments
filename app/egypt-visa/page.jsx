import View from '@/views/EgyptVisa'
import { buildVisaMetadata } from '@/data/visaMeta'

export const metadata = buildVisaMetadata('egypt-visa')

export default function Page() {
  return <View />
}