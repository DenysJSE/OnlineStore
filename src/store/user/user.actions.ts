import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'
import { AuthService } from '@/services/auth/auth.service'
import { removeFromStorage } from '@/services/auth/auth.helper'
import { errorCatch } from '@/api/api.helper'
import { LOGIN_METHOD, REGISTER_METHOD } from '@/constants/app.constants'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'/auth/register',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.main(REGISTER_METHOD, data)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'/auth/login',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.main(LOGIN_METHOD, data)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	removeFromStorage()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				thunkApi.dispatch(logout())
			}

			return thunkApi.rejectWithValue(error)
		}
	}
)
