import { FC } from 'react'
import { Meta } from '@/ui/Meta'
import Catalog from '@/ui/catalog/Catalog'
import { TypePaginationProducts } from '@/types/product.interface'
import Layout from '@/ui/layout/Layout'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Meta title='Home'>
			<Layout>
				<Catalog title='Freshed Products' products={products} />
			</Layout>
		</Meta>
	)
}

export default Home
