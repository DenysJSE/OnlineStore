'use client'

import { FC, useState } from 'react'
import { TypePaginationProducts } from '@/types/product.interface'
import ProductItem from '@/ui/catalog/product-item/ProductItem'
import Heading from '@/ui/Heading'
import SortDropdown from '@/ui/catalog/SortDropdown'
import Button from '@/ui/button/Button'
import { EnumProductSort } from '@/services/interfaces/product.types'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { ProductService } from '@/services/product.service'
import { PRODUCT_PER_PAGE } from '@/constants/app.constants'

interface ICatalogPagination {
	data: TypePaginationProducts
	title?: string
}

const Catalog: FC<ICatalogPagination> = ({ data, title }) => {
	const [page, setPage] = useState(1)
	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)

	const { data: response, isLoading } = useQuery({
		queryKey: ['products', sortType, page],
		queryFn: () =>
			ProductService.getAll({
				page,
				perPage: PRODUCT_PER_PAGE,
				sort: sortType,
				ratings: ''
			}),
		initialData: () => data,
		placeholderData: keepPreviousData
	})

	if (isLoading) return <div>Loading...</div>
	return (
		<section>
			<div
				className={`flex w-full ${title ? 'justify-between' : 'justify-end'} items-center`}
			>
				{title && <Heading className='mb-5'>{title}</Heading>}
				<SortDropdown sortType={sortType} setSortType={setSortType} />
			</div>
			{response?.products.length ? (
				<>
					<div className='grid grid-cols-4 gap-10 2xl:grid-cols-5 3xl:grid-cols-6'>
						{response?.products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
					<div className='text-center mt-16'>
						{Array.from({
							length: response.length / PRODUCT_PER_PAGE
						}).map((_, index) => {
							const pageNumber = index + 1
							return (
								<Button
									key={index}
									variant={page === pageNumber ? 'orange' : 'light'}
									size='sm'
									onClick={() => setPage(pageNumber)}
									className='mx-3'
								>
									{pageNumber}
								</Button>
							)
						})}
					</div>
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default Catalog
