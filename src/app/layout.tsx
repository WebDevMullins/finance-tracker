import type { Metadata, Viewport } from 'next'

import { Toaster } from '@/components/ui/toaster'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { ConvexClientProvider } from '@/providers/convex-client-provider'
import { ThemeProvider } from '@/providers/theme-provider'

import '@/styles/globals.css'
import { GeistSans } from 'geist/font/sans'

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`
	},
	metadataBase: new URL(siteConfig.url),
	description: siteConfig.description,
	keywords: ['Next.js', 'React', 'Tailwind CSS', 'Finance', 'Money'],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.name
			}
		]
	},
	icons: [{ rel: 'icon', url: '/favicon.ico' }]
}

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' }
	]
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='en'
			suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					GeistSans.variable
				)}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					disableTransitionOnChange
					enableSystem>
					<div vaul-drawer-wrapper=''>
						<div className='relative flex min-h-screen flex-col bg-background'>
							<ConvexClientProvider>{children}</ConvexClientProvider>
						</div>
					</div>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
