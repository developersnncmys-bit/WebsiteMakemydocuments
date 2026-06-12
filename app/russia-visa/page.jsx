import View from '@/views/RussiaVisa'
import { buildVisaMetadata } from '@/data/visaMeta'

export const metadata = buildVisaMetadata('russia-visa')

export default function Page() {
  return <View />
}