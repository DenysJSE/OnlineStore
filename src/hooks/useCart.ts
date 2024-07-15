import { useTypedSelector } from '@/hooks/useTypedSelector'

export const useCart = () => useTypedSelector(state => state.cart)
