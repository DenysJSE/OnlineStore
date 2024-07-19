import { Metadata } from 'next'
import { ProductService } from '@/services/product.service'
import Home from '@/app/Home'
import { PRODUCT_PER_PAGE } from '@/constants/app.constants'

export const metadata: Metadata = {
	description: 'Get the best products of all time.'
}

export const revalidate = 60

async function getProducts() {
	const data = await ProductService.getAll({
		page: 1,
		perPage: PRODUCT_PER_PAGE,
		ratings: ''
	})

	return data
}

export default async function Page() {
	const data = await getProducts()

	return <Home length={data.length} products={data.products} />
}
