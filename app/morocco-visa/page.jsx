import View from '@/views/MoroccoVisa'
import { buildVisaMetadata } from '@/data/visaMeta'

export const metadata = buildVisaMetadata('morocco-visa')

export default function Page() {
  return <View />
}