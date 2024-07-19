'use client'

import { FC } from 'react'
import { IProduct } from '@/types/product.interface'
import ProductItem from '@/ui/catalog/product-item/ProductItem'
import Heading from '@/ui/Heading'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
}

const Catalog: FC<ICatalog> = ({ products, isLoading, title }) => {
	if (isLoading) return <div>Loading...</div>
	return (
		<section>
			{title && <Heading className='mb-5'>{title}</Heading>}
			{products.length ? (
				<div className='grid grid-cols-4 gap-10 2xl:grid-cols-5 3xl:grid-cols-6'>
					{products.map(product => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default Catalog
