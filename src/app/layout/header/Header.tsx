import { FC } from 'react'
import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'

import HeaderCart from '@/app/layout/header/cart/HeaderCart'
import HeaderProfile from '@/app/layout/header/HeaderProfile'
import Search from '@/app/layout/header/Search'

const Header: FC = () => {
	return (
		<header
			className='bg-secondary w-full py-6 px-6 grid'
			style={{ gridTemplateColumns: '1fr 1.2fr' }}
		>
			<Link href='/'>Logo</Link>
			{/*<Search />*/}
			<div className='flex items-center justify-end gap-10'>
				<Link href='/favorites' className='text-white'>
					<AiOutlineHeart size={28} />
				</Link>
				<HeaderCart />
				<HeaderProfile />
			</div>
		</header>
	)
}

export default Header
