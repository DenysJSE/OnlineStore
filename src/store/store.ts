import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	persistReducer,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { userSlice } from '@/store/user/user.slice'

const persistConfig = {
	key: 'online-store',
	storage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	// cart: cartSlice.reducer,
	// carousel: carouselSlice.reducer,
	user: userSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
