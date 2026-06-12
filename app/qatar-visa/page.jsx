import View from '@/views/QatarVisa'
import { buildVisaMetadata } from '@/data/visaMeta'

export const metadata = buildVisaMetadata('qatar-visa')

export default function Page() {
  return <View />
}