import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useEffect } from 'react'
import { FiltersDataType } from '@/services/interfaces/product.types'

export const useFilters = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const { updateQueryParam } = useActions()
	const { replace } = useRouter()
	const { queryParams, isFilterUpdated } = useTypedSelector(
		state => state.filters
	)

	useEffect(() => {
		searchParams.forEach((value, key) => {
			updateQueryParam({ key: key as keyof FiltersDataType, value })
		})
	}, [])

	const updateQueryParams = (key: keyof FiltersDataType, value: string) => {
		const newParams = new URLSearchParams(searchParams.toString())

		if (value) newParams.set(key, String(value))
		else newParams.delete(key)

		replace(pathname + `?${newParams.toString().replace(/%7C/g, '|')}`)
		updateQueryParam({ key, value })
	}

	return {
		updateQueryParams,
		queryParams,
		isFilterUpdated
	}
}
