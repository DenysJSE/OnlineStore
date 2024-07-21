'use client'

import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { CategoryService } from '@/services/category.service'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import Link from 'next/link'
import cn from 'clsx'
import { FiLogOut } from 'react-icons/fi'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import { useCategories } from '@/hooks/queries/useCategories'
import { ADMIN_MENU } from '@/app/layout/sidebar/admin-menu.data'
import { convertToMenuItems } from '@/app/layout/sidebar/convert-to-menu-items'

const Sidebar: FC = () => {
	const { data, isLoading } = useCategories()
	const { user } = useAuth()
	const { logout } = useActions()
	const { isAdminPanel, pathname } = useIsAdminPanel()

	return (
		<aside
			className='bg-secondary flex flex-col justify-between z-10'
			style={{ minHeight: 'calc(100% - 91px)', height: 'calc(100vh - 91px)' }}
		>
			<div>
				{isLoading ? (
					<div>Loading...</div>
				) : data ? (
					<>
						<div className='text-xl text-white mt-4 mb-6'>
							{isAdminPanel ? 'Menu:' : 'Categories:'}
						</div>
						<ul>
							{(isAdminPanel ? ADMIN_MENU : convertToMenuItems(data)).map(
								item => (
									<li key={item.label}>
										<Link
											className={cn(
												'block text-lg my-3 px-10 hover:text-primary transition-colors duration-200',
												pathname === item.href ? 'text-primary' : 'text-white'
											)}
											href={item.href}
										>
											{item.label}
										</Link>
									</li>
								)
							)}
						</ul>
					</>
				) : (
					<div>Categories not found!</div>
				)}
			</div>

			{!!user && (
				<button
					className='text-white flex items-center ml-10 mb-10'
					onClick={() => logout()}
				>
					<FiLogOut />
					<span className='ml-2'>Logout</span>
				</button>
			)}
		</aside>
	)
}

export default Sidebar
