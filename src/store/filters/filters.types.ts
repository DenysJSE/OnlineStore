import { FiltersDataType } from '@/services/interfaces/product.types'

export interface IFilterState {
	isFilterUpdated: boolean
	queryParams: FiltersDataType
}

export interface IFilterActionsPayload {
	key: keyof FiltersDataType
	value: string
}
