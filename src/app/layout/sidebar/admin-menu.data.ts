import { IMenuItem } from '@/app/layout/sidebar/menu.interface'
import { getAdminUrl } from '@/config/url.config'

export const ADMIN_MENU: IMenuItem[] = [
	{
		label: 'Dashboard',
		href: getAdminUrl('/')
	},
	{
		label: 'Products',
		href: getAdminUrl('/products')
	},
	{
		label: 'Categories',
		href: getAdminUrl('/categories')
	},
	{
		label: 'Reviews',
		href: getAdminUrl('/reviews')
	},
	{
		label: 'Orders',
		href: getAdminUrl('/orders')
	}
]
