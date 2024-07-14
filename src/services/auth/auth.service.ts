import Cookies from 'js-cookie'
import { AuthEnums, GlobalEnums } from '@/types/global.enums'
import axios from 'axios'
import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'
import { getContentType } from '@/api/api.helper'
import { saveToStorage } from '@/services/auth/auth.helper'
import { instance } from '@/api/api.interceptor'
import { ServiceEnum } from '@/services/enums/service.enum'

export const AuthService = {
	async main(
		type: AuthEnums.LOGIN_METHOD | AuthEnums.REGISTER_METHOD,
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
		const refreshToken = Cookies.get(GlobalEnums.REFRESH_TOKEN)

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
