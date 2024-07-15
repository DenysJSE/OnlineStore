import { GetStaticProps, NextPage } from 'next'
import Home from '@/screens/home/Home'
import { TypePaginationProducts } from '@/types/product.interface'
import { ProductService } from '@/services/product.service'
import { ProductPerPagePaginationEnum } from '@/types/global.enums'

const HomePage: NextPage<TypePaginationProducts> = ({ products, length }) => {
	return <Home products={products} length={length} />
}

export const getStaticProps: GetStaticProps<
	TypePaginationProducts
> = async () => {
	const data = await ProductService.getAll({
		page: 1,
		perPage: ProductPerPagePaginationEnum.PRODUCT_PER_PAGE
	})

	return {
		props: data
	}
}

export default HomePage
