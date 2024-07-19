'use client'

import { FC } from 'react'
import { TypePaginationProducts } from '@/types/product.interface'
import Layout from '@/ui/layout/Layout'
import CatalogPagination from '@/ui/catalog/CatalogPagination'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Layout>
			<CatalogPagination title='Freshed Products' data={{ products, length }} />
		</Layout>
	)
}

export default Home
