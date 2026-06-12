import View from '@/views/MalaysiaVisa'
import { buildVisaMetadata } from '@/data/visaMeta'

export const metadata = buildVisaMetadata('malaysia-visa')

export default function Page() {
  return <View />
}