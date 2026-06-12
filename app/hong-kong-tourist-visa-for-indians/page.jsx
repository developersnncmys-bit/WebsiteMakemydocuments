import View from '@/views/HongKongVisa'
import { buildVisaMetadata } from '@/data/visaMeta'

export const metadata = buildVisaMetadata('hongkong-visa')

export default function Page() {
  return <View />
}