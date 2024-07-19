'use client'

import Heading from '@/ui/Heading'
import { convertPrice } from '@/utils/convert-price'
import Layout from '@/ui/layout/Layout'
import { useQuery } from '@tanstack/react-query'
import { OrderService } from '@/services/order.service'

export default function MyOrders() {
	const { data: orders } = useQuery({
		queryKey: ['my orders'],
		queryFn: () => OrderService.getAll(),
		select: ({ data }) => data
	})

	return (
		<Layout>
			<Heading>My Orders:</Heading>
			<section>
				{orders?.length ? (
					orders.map(order => (
						<div
							key={order.id}
							className='rounded-lg bg-white shadow flex gap-10 p-7 my-7'
						>
							<span>#{order.id}</span>
							<span>{order.status}</span>
							<span>
								{new Date(order.createdAt).toLocaleDateString('uk-Uk')}
							</span>
							<span>{convertPrice(order.total)}</span>
						</div>
					))
				) : (
					<div>There are no orders yet!</div>
				)}
			</section>
		</Layout>
	)
}
