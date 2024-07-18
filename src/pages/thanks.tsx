import { NextPage } from 'next'
import { Meta } from '@/ui/Meta'
import Layout from '@/ui/layout/Layout'

const ThanksPage: NextPage = () => {
	return (
		<Meta title='Thank you'>
			<Layout>Thank you for order!</Layout>
		</Meta>
	)
}

export default ThanksPage
