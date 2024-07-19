import { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/app.constants'
import MyOrders from '@/app/(customer)/my-orders/MyOrders'

export const metadata: Metadata = {
	title: 'My Orders',
	...NO_INDEX_PAGE
}

export default function MyOrdersPage() {
	return <MyOrders />
}
