import { FC, PropsWithChildren, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import { getAccessToken, getRefreshToken } from '@/services/auth/auth.helper'
import { usePathname, useRouter } from 'next/navigation'
import { protectedRoutes } from '@/providers/auth-provider/protected-routes.data'
import { ADMIN_PANEL_URL } from '@/config/url.config'
import NotFound from 'next/dist/client/components/not-found-error'

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { user } = useAuth()
	const { checkAuth, logout } = useActions()
	const pathname = usePathname()
	const router = useRouter()

	useEffect(() => {
		const accessToken = getAccessToken()
		if (accessToken) checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = getRefreshToken()
		if (!refreshToken && user) logout()
	}, [pathname])

	const isProtectedRoute = protectedRoutes.some(route =>
		pathname?.startsWith(route)
	)
	const isAdminRoute = pathname?.startsWith(ADMIN_PANEL_URL)

	if (!isProtectedRoute && !isAdminRoute) return <>{children}</>
	if (user?.isAdmin) return <>{children}</>
	if (user && isProtectedRoute) return <>{children}</>
	if (user && isAdminRoute) return <NotFound />

	pathname !== '/auth' && router.replace('/auth')
	return null
}

export default AuthProvider
