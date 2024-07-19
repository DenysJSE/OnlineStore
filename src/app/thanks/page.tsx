import { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/app.constants'
import Layout from '@/ui/layout/Layout'
import Heading from '@/ui/Heading'

export const metadata: Metadata = {
	title: 'Thanks',
	...NO_INDEX_PAGE
}

export default function ThanksPage() {
	return (
		<Layout>
			<Heading>Thanks!</Heading>
		</Layout>
	)
}
