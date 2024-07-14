import Cookies from 'js-cookie'
import { IAuthResponse, ITokens } from '@/store/user/user.interface'
import { GlobalEnums } from '@/types/global.enums'

export const getAccessToken = () => {
	const accessToken = Cookies.get(GlobalEnums.ACCESS_TOKEN)
	return accessToken || null
}

export const getRefreshToken = () => {
	const refreshToken = Cookies.get(GlobalEnums.REFRESH_TOKEN)
	return refreshToken || null
}

export const getUserFromStorage = () => {
	return JSON.parse(localStorage.getItem('user') || '{}')
}

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set(GlobalEnums.ACCESS_TOKEN, data.accessToken)
	Cookies.set(GlobalEnums.REFRESH_TOKEN, data.refreshToken)
}

export const removeFromStorage = () => {
	Cookies.remove(GlobalEnums.ACCESS_TOKEN)
	Cookies.remove(GlobalEnums.REFRESH_TOKEN)
	localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}
