import { FC, useState } from 'react'
import { IProduct } from '@/types/product.interface'
import { Rating } from 'react-simple-star-rating'

interface IProductRating {
	product: IProduct
	isText?: boolean
}

const ProductRating: FC<IProductRating> = ({ product, isText = false }) => {
	const [rating, setRating] = useState(
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length
		) || 0
	)

	return (
		<div className='mb-2'>
			{!!product.reviews.length && (
				<span className='mr-1 inline-flex items-center'>
					<Rating
						readonly
						initialValue={rating}
						SVGstyle={{
							display: 'inline-block'
						}}
						size={20}
						allowFraction
						transition
					/>
					<span
						className='text-sm font-semibold ml-1 pt-1'
						style={{ color: '#FFBC0B' }}
					>
						{rating}
					</span>
				</span>
			)}
			{isText && (
				<span className='text-xs'>({product.reviews.length} reviews)</span>
			)}
		</div>
	)
}

export default ProductRating
