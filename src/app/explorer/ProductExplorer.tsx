'use client'

import { TypePaginationProducts } from '@/types/product.interface'
import { FC, useState } from 'react'
import { useFilters } from '@/app/explorer/useFilters'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from '@/services/product.service'
import Heading from '@/ui/Heading'
import SortDropdown from '@/app/explorer/sort/SortDropdown'
import Button from '@/ui/button/Button'
import cn from 'clsx'
import styles from './ProductExplorer.module.scss'
import Catalog from '@/ui/catalog/Catalog'
import Pagination from '@/app/explorer/pagination/Pagination'

interface IProductExplorer {
	initialProducts: TypePaginationProducts
}

const ProductExplorer: FC<IProductExplorer> = ({ initialProducts }) => {
	const [isFilterOpen, setIsFilterOpen] = useState(false)

	const { isFilterUpdated, queryParams, updateQueryParams } = useFilters()

	const { data, isFetching } = useQuery({
		queryKey: ['product explorer', { queryParams }],
		queryFn: () => ProductService.getAll(queryParams),
		initialData: () => initialProducts,
		enabled: () => isFilterUpdated
	})

	return (
		<>
			<div className='flex items-center justify-between mb-7'>
				<Heading>
					{queryParams.searchTerm
						? `Search by query "${queryParams.searchTerm}"`
						: 'Explorer'}
				</Heading>
				<SortDropdown />
			</div>
			<Button
				variant='light'
				onClick={() => setIsFilterOpen(!isFilterOpen)}
				className='mb-7'
			>
				{isFilterOpen ? 'Close' : 'Open'} filters
			</Button>

			<div
				className={cn(styles.explorer, { [styles.filterOpened]: isFilterOpen })}
			>
				<aside>{/* Filters */}</aside>
				<section>
					<Catalog products={data?.products} isLoading={isFetching} />
					<Pagination
						changePage={page => updateQueryParams('page', page.toString())}
						currentPage={queryParams.page}
						numberPages={data?.length / +queryParams.perPage}
					/>
				</section>
			</div>
		</>
	)
}

export default ProductExplorer
