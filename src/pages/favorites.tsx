import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'
import { useProfile } from '@/hooks/useProfile'
import { Meta } from '@/ui/Meta'
import Layout from '@/ui/layout/Layout'
import Catalog from '@/ui/catalog/Catalog'

const FavoritesPage: NextPageAuth = () => {
	const { profile } = useProfile()

	return (
		<Meta title='Favorites'>
			<Layout>
				<Catalog products={profile?.favorites || []} title='Favorites' />
			</Layout>
		</Meta>
	)
}

FavoritesPage.isOnlyUser = true

export default FavoritesPage
