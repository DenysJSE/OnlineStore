import { useQuery } from '@tanstack/react-query'
import { CategoryService } from '@/services/category.service'

export const useCategories = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['get categories'],
		queryFn: () => CategoryService.getAll(),
		select: ({ data }) => data
	})

	return { data, isLoading }
}
