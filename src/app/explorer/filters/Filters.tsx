import { FC } from 'react'
import PriceGroup from '@/app/explorer/filters/price-group/PriceGroup'
import CategoryGroup from '@/app/explorer/filters/category-group/CategoryGroup'
import RatingGroup from '@/app/explorer/filters/ratings-group/RatingGroup'

const Filters: FC = () => {
	return (
		<div>
			<PriceGroup />
			<CategoryGroup />
			<RatingGroup />
		</div>
	)
}

export default Filters
