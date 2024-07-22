import { instance } from '@/api/api.interceptor'
import { ServiceEnum } from '@/services/enums/service.enum'
import { IOrder } from '@/types/order.interface'
import { PlaceOrderType } from '@/services/interfaces/order.types'

export const OrderService = {
	async getAll() {
		return instance<IOrder[]>({
			url: ServiceEnum.ORDER,
			method: 'GET'
		})
	},

	async getByUserId() {
		return instance<IOrder[]>({
			url: `${ServiceEnum.ORDER}/by-user`,
			method: 'GET'
		})
	},

	async place(data: PlaceOrderType) {
		return instance({
			url: ServiceEnum.ORDER,
			method: 'POST',
			data
		})
	}
}
