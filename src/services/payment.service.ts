import { IPaymentResponse } from '@/types/payment.interface'
import { instance } from '@/api/api.interceptor'
import { ServiceEnum } from '@/services/enums/service.enum'

export const PaymentService = {
	async createPayment(amount: number) {
		return instance.post<IPaymentResponse>(ServiceEnum.PAYMENT, {
			amount
		})
	}
}
