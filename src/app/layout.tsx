import { PropsWithChildren } from 'react'
import '@/assets/styles/globals.css'
import Providers from '@/providers/Providers'
import { Metadata } from 'next'
import { SITE_NAME } from '@/constants/app.constants'
import { getSiteUrl } from '@/config/url.config'
import Header from '@/app/layout/header/Header'
import Sidebar from '@/app/layout/sidebar/Sidebar'

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.svg'
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['info@onlinestore.com']
	}
}

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang='en'>
			<body>
				<Providers>
					<div>
						<Header />
						<div className='grid' style={{ gridTemplateColumns: '1fr 5fr' }}>
							<Sidebar />
							<main className='p-12'>{children}</main>
						</div>
					</div>
				</Providers>
				<div id='modal'></div>
			</body>
		</html>
	)
}
