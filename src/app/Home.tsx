import { FC } from 'react'
import { TypePaginationProducts } from '@/types/product.interface'
import CatalogPagination from '@/ui/catalog/CatalogPagination'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<CatalogPagination title='Freshed Products' data={{ products, length }} />
	)
}

export default Home
