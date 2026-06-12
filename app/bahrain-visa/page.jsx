import View from '@/views/BahrainVisa'
import { buildVisaMetadata } from '@/data/visaMeta'

export const metadata = buildVisaMetadata('bahrain-visa')

export default function Page() {
  return <View />
}