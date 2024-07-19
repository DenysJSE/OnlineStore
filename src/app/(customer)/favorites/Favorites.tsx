'use client'

import Catalog from '@/ui/catalog/Catalog'
import { useProfile } from '@/hooks/useProfile'

export default function Favorites() {
	const { profile } = useProfile()

	return <Catalog products={profile?.favorites || []} title='Favorites' />
}
