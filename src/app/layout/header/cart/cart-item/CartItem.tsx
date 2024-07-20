import { FC } from 'react'
import { ICartItem } from '@/types/cart.interface'
import Image from 'next/image'
import { convertPrice } from '@/utils/convert-price'
import CartActions from '@/app/layout/header/cart/cart-item/cart-actions/CartActions'
import styles from '../Cart.module.scss'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				src={item.product.images[0]}
				alt={item.product.name}
				width={100}
				height={100}
			/>
			<div>
				<div className={styles.name}>{item.product.name}</div>
				<div className={styles.price}>{convertPrice(item.product.price)}</div>
				<CartActions item={item} />
			</div>
		</div>
	)
}

export default CartItem
