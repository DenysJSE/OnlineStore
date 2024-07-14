import { instance } from '@/api/api.interceptor'
import { ServiceEnum } from '@/services/enums/service.enum'
import { TypeStatisticResponse } from '@/services/interfaces/service.interface'

export const StatisticService = {
	async getMain() {
		return instance<TypeStatisticResponse>({
			url: `${ServiceEnum.STATISTIC}/main`,
			method: 'GET'
		})
	}
}
