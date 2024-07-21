import { FC } from 'react'
import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'
import { RiShoppingCartLine } from 'react-icons/ri'
import SquareButton from '@/ui/button/SquareButton'
import { convertPrice } from '@/utils/convert-price'
import Button from '@/ui/button/Button'
import { useActions } from '@/hooks/useActions'
import { useRouter } from 'next/navigation'
import { OrderService } from '@/services/order.service'
import CartItem from '@/app/layout/header/cart/cart-item/CartItem'
import styles from './Cart.module.scss'
import Link from 'next/link'

const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { items, total } = useCart()

	//TODO: --{ "transfer this logic to checkout page" }--

	// const { reset } = useActions()
	// const { push } = useRouter()
	// const handlePlaceOrder = async () => {
	// 	try {
	// 		const orderData = {
	// 			items: items.map(item => ({
	// 				price: item.price,
	// 				quantity: item.quantity,
	// 				productId: item.product.id
	// 			}))
	// 		}
	// 		await OrderService.place(orderData)
	// 		reset()
	// 		push('/thanks')
	// 	} catch (error) {
	// 		console.error(error)
	// 	}
	// }

	return (
		<div className='relative' ref={ref}>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => setIsShow(!isShow)}
				number={items.length}
			/>
			{isShow && (
				<div className={styles.cartWrapper}>
					<div className='font-normal text-lg mb-5'>My Cart</div>
					<div className={styles.cart}>
						{items.length ? (
							items.map(item => <CartItem item={item} key={item.id} />)
						) : (
							<div className='font-light'>Cart is empty!</div>
						)}
					</div>
					<div className={styles.footer}>
						<div>Total:</div>
						<div>{convertPrice(total)}</div>
					</div>
					{!!items.length && (
						<div className='text-center mt-7 mb-5'>
							<Link href='/checkout' className='btn btn-white'>
								Go to checkout
							</Link>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Cart
