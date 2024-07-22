import { FC } from 'react'
import { useFilters } from '@/app/explorer/useFilters'
import FilterWrapper from '@/app/explorer/filters/FilterWrapper'
import { RATINGS_VARIANTS } from '@/app/explorer/filters/ratings-group/ratings-variants.data'
import Checkbox from '@/ui/checkbox/Checkbox'
import { updateRatingsQuery } from '@/app/explorer/filters/ratings-group/update-ratings-query'
import { Rating } from 'react-simple-star-rating'

const RatingGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	return (
		<FilterWrapper title='Number of reviews'>
			{RATINGS_VARIANTS.map(rating => (
				<Checkbox
					isChecked={queryParams.ratings?.includes(rating.toString())}
					onClick={() =>
						updateQueryParams(
							'ratings',
							updateRatingsQuery(queryParams.ratings, rating.toString())
						)
					}
					key={rating}
					className='mb-2 text-sm'
				>
					<Rating
						readonly
						initialValue={rating}
						SVGstyle={{ display: 'inline-block' }}
						size={20}
						transition
					/>
				</Checkbox>
			))}
		</FilterWrapper>
	)
}

export default RatingGroup
