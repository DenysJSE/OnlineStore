import { instance } from '@/api/api.interceptor'
import { IReview } from '@/types/review.interface'
import { ServiceEnum } from '@/services/enums/service.enum'
import { LeaveReviewDataType } from '@/services/interfaces/service.interface'

export const ReviewService = {
	async getAll() {
		return instance<IReview[]>({
			url: ServiceEnum.REVIEW,
			method: 'GET'
		})
	},

	async leaveReview(productId: number | string, data: LeaveReviewDataType) {
		return instance<IReview>({
			url: `${ServiceEnum.REVIEW}/leave/${productId}`,
			method: 'POST',
			data
		})
	}
}
