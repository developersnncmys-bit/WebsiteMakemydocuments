import View from '@/views/OmanVisa'
import { buildVisaMetadata } from '@/data/visaMeta'

export const metadata = buildVisaMetadata('oman-visa')

export default function Page() {
  return <View />
}