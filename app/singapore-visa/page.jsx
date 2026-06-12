import View from '@/views/SingaporeVisa'
import { buildVisaMetadata } from '@/data/visaMeta'

export const metadata = buildVisaMetadata('singapore-visa')

export default function Page() {
  return <View />
}