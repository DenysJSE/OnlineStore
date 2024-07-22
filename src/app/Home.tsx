import { FC } from 'react'
import { TypePaginationProducts } from '@/types/product.interface'
import Catalog from '@/ui/catalog/Catalog'
import Carousel from '@/ui/carousel/Carousel'
import { carouselItems } from '@/app/carousel.data'

const Home: FC<TypePaginationProducts> = ({ products }) => {
	return (
		<>
			<Carousel items={carouselItems} className='mb-10' />
			<Catalog title='Freshed Products' products={products} />
		</>
	)
}

export default Home
