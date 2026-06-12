import View from '@/views/UKVisa'
import { buildVisaMetadata } from '@/data/visaMeta'

export const metadata = buildVisaMetadata('uk-visa')

export default function Page() {
  return <View />
}