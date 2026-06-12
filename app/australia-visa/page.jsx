import View from '@/views/AustraliaVisa'
import { buildVisaMetadata } from '@/data/visaMeta'

export const metadata = buildVisaMetadata('australia-visa')

export default function Page() {
  return <View />
}