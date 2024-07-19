'use client'

import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/layout/Layout'
import { useProfile } from '@/hooks/useProfile'

export default function Favorites() {
	const { profile } = useProfile()

	return (
		<Layout>
			<Catalog products={profile?.favorites || []} title='Favorites' />
		</Layout>
	)
}
