'use client'

import { FC } from 'react'
import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'

import HeaderCart from '@/app/layout/header/cart/HeaderCart'
import HeaderProfile from '@/app/layout/header/HeaderProfile'
import Search from '@/app/layout/header/Search'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import { useAuth } from '@/hooks/useAuth'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'

const Header: FC = () => {
	const { isAdminPanel } = useIsAdminPanel()
	const { user } = useAuth()

	return (
		<header
			className='bg-secondary w-full py-6 px-6 grid'
			style={{ gridTemplateColumns: '1fr 3fr 1.2fr' }}
		>
			<Link
				href='/'
				className='text-white flex items-center ml-8 text-2xl font-bold'
			>
				{isAdminPanel ? <h2>Admin Panel</h2> : <h2>Online Store</h2>}
			</Link>
			<Search />
			<div className='flex items-center justify-end gap-10'>
				{user?.isAdmin && !isAdminPanel && (
					<Link
						href='/admin'
						className='hover:text-primary transition-colors duration-200 text-white inline-block text-lg'
					>
						<MdOutlineAdminPanelSettings size={29} />
					</Link>
				)}
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
