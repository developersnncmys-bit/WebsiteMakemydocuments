import View from '@/views/IndonesiaVisa'
import { buildVisaMetadata } from '@/data/visaMeta'

export const metadata = buildVisaMetadata('indonesia-visa')

export default function Page() {
  return <View />
}