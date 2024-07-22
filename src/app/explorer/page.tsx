import { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/app.constants'
import { ProductService } from '@/services/product.service'
import {
	FiltersDataType,
	TypeParamsFilters
} from '@/services/interfaces/product.types'
import ProductExplorer from '@/app/explorer/ProductExplorer'

export const metadata: Metadata = {
	title: 'Explorer',
	...NO_INDEX_PAGE
}

export const revalidate = 60

async function getProducts(searchParams: FiltersDataType) {
	const data = await ProductService.getAll(searchParams)

	return data
}

export default async function ExplorerPage({
	searchParams
}: TypeParamsFilters) {
	const data = await getProducts(searchParams)

	return <ProductExplorer initialProducts={data} />
}
