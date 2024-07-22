import { FC } from 'react'
import { EnumProductSort } from '@/services/interfaces/product.types'
import { useFilters } from '@/app/explorer/useFilters'
import Select from '@/ui/select/Select'
import { SORT_SELECT_DATA } from '@/app/explorer/sort/sort-select.data'

const SortDropdown: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	return (
		<div className='text-right z-10'>
			<Select<EnumProductSort>
				data={SORT_SELECT_DATA}
				onChange={value => updateQueryParams('sort', value.key.toString())}
				value={SORT_SELECT_DATA.find(value => value.key === queryParams.sort)}
				title='Sort by'
			/>
		</div>
	)
}

export default SortDropdown
