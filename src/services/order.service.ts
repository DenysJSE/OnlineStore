import { instance } from '@/api/api.interceptor'
import { ServiceEnum } from '@/services/enums/service.enum'
import { IOrder } from '@/types/order.interface'

export const OrderService = {
	async getAll() {
		return instance<IOrder[]>({
			url: ServiceEnum.ORDER,
			method: 'GET'
		})
	}
}
