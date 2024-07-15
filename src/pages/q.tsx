import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from '@/services/product.service'
import { Meta } from '@/ui/Meta'
import Layout from '@/ui/layout/Layout'
import Catalog from '@/ui/catalog/Catalog'

const SearchPage: NextPage = () => {
	const { query } = useRouter()

	const { data } = useQuery({
		queryKey: ['search products', query.term],
		queryFn: () => ProductService.getAll({ searchTerm: query.term as string }),
		enabled: !!query.term
	})

	return (
		<Meta title='Search'>
			<Layout>
				<Catalog
					products={data?.products || []}
					title={`Search by term "${query.term || ''}"`}
				/>
			</Layout>
		</Meta>
	)
}

export default SearchPage
