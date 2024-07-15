import { Dispatch, FC, SetStateAction } from 'react'
import { EnumProductSort } from '@/services/interfaces/product.types'

interface ISortDropdown {
	sortType: EnumProductSort
	setSortType: Dispatch<SetStateAction<EnumProductSort>>
}

const SortDropdown: FC<ISortDropdown> = ({ sortType, setSortType }) => {
	return (
		<div className='mb-5'>
			<select
				value={sortType}
				onChange={e => setSortType(e.target.value as any)}
				className='appearance-none py-1 px-10 bg-white rounded-xl shadow'
			>
				{(
					Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
				).map(key => {
					return (
						<option key={key} value={EnumProductSort[key]}>
							{EnumProductSort[key]}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default SortDropdown
