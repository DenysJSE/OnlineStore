import { FC } from 'react'
import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'
import { RiShoppingCartLine } from 'react-icons/ri'
import cn from 'clsx'
import SquareButton from '@/ui/button/SquareButton'
import CartItem from '@/ui/layout/header/cart/cart-item/CartItem'
import { convertPrice } from '@/utils/convert-price'
import Button from '@/ui/button/Button'
import { useActions } from '@/hooks/useActions'
import { useRouter } from 'next/navigation'
import { OrderService } from '@/services/order.service'

const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { items, total } = useCart()
	const { reset } = useActions()
	const { push } = useRouter()

	const handlePlaceOrder = async () => {
		try {
			const orderData = {
				items: items.map(item => ({
					price: item.price,
					quantity: item.quantity,
					productId: item.product.id
				}))
			}
			await OrderService.place(orderData)
			reset()
			await push('/thanks')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className='relative' ref={ref}>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => setIsShow(!isShow)}
				number={items.length}
			/>

			<div
				className={cn(
					'absolute top-[4.2rem] w-80 -left-[12.5rem] bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white',
					isShow ? 'open-menu' : 'close-menu'
				)}
			>
				<div className='font-normal text-lg mb-5'>My Cart</div>
				<div className={'styles.cart'}>
					{items.length ? (
						items.map(item => <CartItem item={item} key={item.id} />)
					) : (
						<div className='font-light'>Cart is empty!</div>
					)}
				</div>
				<div className={'styles.footer'}>
					<div>Total:</div>
					<div>{convertPrice(total)}</div>
				</div>
				<div className='text-center'>
					<Button
						variant='light'
						size='sm'
						className='btn-link mt-5 mb-2'
						onClick={handlePlaceOrder}
					>
						Place Order
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Cart
