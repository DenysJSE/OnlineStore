import axios from 'axios'
import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'
import { getContentType } from '@/api/api.helper'
import { getRefreshToken, saveToStorage } from '@/services/auth/auth.helper'
import { instance } from '@/api/api.interceptor'
import { ServiceEnum } from '@/services/enums/service.enum'
import { LOGIN_METHOD, REGISTER_METHOD } from '@/constants/app.constants'

export const AuthService = {
	async main(
		type: typeof LOGIN_METHOD | typeof REGISTER_METHOD,
		data: IEmailPassword
	) {
		const response = await instance<IAuthResponse>({
			url: `${ServiceEnum.AUTH}/${type}`,
			method: 'POST',
			data
		})

		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	},

	async getNewTokens() {
		const refreshToken = getRefreshToken()

		const response = await axios.post<string, { data: IAuthResponse }>(
			process.env.SERVER_URL + `${ServiceEnum.AUTH}/login/access-token`,
			{ refreshToken },
			{
				headers: getContentType()
			}
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	}
}
