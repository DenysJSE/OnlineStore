import { EnumOrderStatus } from '@/types/order.interface'
import { ICartItem } from '@/types/cart.interface'

export type PlaceOrderType = {
	status?: EnumOrderStatus
	items: {
		quantity: number
		price: number
		productId: number
	}[]
}
