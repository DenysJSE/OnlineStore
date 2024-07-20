import { FC } from 'react'
import { TypePaginationProducts } from '@/types/product.interface'
import Catalog from '@/ui/catalog/Catalog'

const Home: FC<TypePaginationProducts> = ({ products }) => {
	return <Catalog title='Freshed Products' products={products} />
}

export default Home
