import * as userActions from './user/user.actions'
import { cartSlice } from '@/store/cart/cart.slice'
import { carouselSlice } from '@/store/carousel/carousel.slice'
import { filtersSlice } from '@/store/filters/filters.slice'

export const rootActions = {
	...userActions,
	...cartSlice.actions,
	...carouselSlice.actions,
	...filtersSlice.actions
}
