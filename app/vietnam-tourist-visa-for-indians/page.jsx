import View from '@/views/VietnamVisa'
import { buildVisaMetadata } from '@/data/visaMeta'

export const metadata = buildVisaMetadata('vietnam-visa')

export default function Page() {
  return <View />
}