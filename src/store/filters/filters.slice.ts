import {
	IFilterActionsPayload,
	IFilterState
} from '@/store/filters/filters.types'
import { EnumProductSort } from '@/services/interfaces/product.types'
import { PRODUCT_PER_PAGE } from '@/constants/app.constants'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IFilterState = {
	isFilterUpdated: false,
	queryParams: {
		sort: EnumProductSort.NEWEST,
		searchTerm: '',
		page: 1,
		perPage: PRODUCT_PER_PAGE,
		ratings: ''
	}
}

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		updateQueryParam: (state, action: PayloadAction<IFilterActionsPayload>) => {
			const { key, value } = action.payload
			state.queryParams[key] = value
			state.isFilterUpdated = true
		},
		resetFilterUpdate: state => {
			state.isFilterUpdated = false
		}
	}
})
