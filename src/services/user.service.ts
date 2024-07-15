import { instance } from '@/api/api.interceptor'
import { ServiceEnum } from '@/services/enums/service.enum'
import { IFullUser, IUser } from '@/types/user.interface'
import { UpdateUserProfileDataType } from '@/services/interfaces/service.interface'

export const UserService = {
	async getProfile() {
		return instance<IFullUser>({
			url: `${ServiceEnum.USER}/profile`,
			method: 'GET'
		})
	},

	async updateProfile(data: UpdateUserProfileDataType) {
		return instance<IUser>({
			url: `${ServiceEnum.USER}/profile`,
			method: 'PUT',
			data
		})
	},

	async toggleFavorite(productId: number | string) {
		return instance<IUser>({
			url: `${ServiceEnum.USER}/profile/favorites/${productId}`,
			method: 'PATCH'
		})
	}
}
