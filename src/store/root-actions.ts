import * as userActions from './user/user.actions'
import { cartSlice } from '@/store/cart/cart.slice'

export const rootActions = {
	...userActions,
	...cartSlice.actions
}
