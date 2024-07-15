import { FC } from 'react'
import { Meta } from '@/ui/Meta'
import { TypePaginationProducts } from '@/types/product.interface'
import Layout from '@/ui/layout/Layout'
import CatalogPagination from '@/ui/catalog/CatalogPagination'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Meta title='Home'>
			<Layout>
				<CatalogPagination
					title='Freshed Products'
					data={{ products, length }}
				/>
			</Layout>
		</Meta>
	)
}

export default Home
