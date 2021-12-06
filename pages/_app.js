import 'tailwindcss/tailwind.css'
import Script from 'next/script'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { initialize } from '@/lib/clientApp'
import * as gtag from '@/lib/gTag'

export default function App({ Component, pageProps }) {
	const [loading, setLoading] = useState(false)
	const router = useRouter()

	useEffect(() => {
		// initialize()

		const handleStart = (url) => {
			url !== router.asPath && setLoading(true)
		}
		const handleComplete = (url) => {
			url === router.asPath && setLoading(false)
		}

		router.events.on('routeChangeStart', handleStart)
		router.events.on('routeChangeComplete', handleComplete)
		router.events.on('routeChangeError', handleComplete)

		return () => {
			router.events.off('routeChangeStart', handleStart)
			router.events.off('routeChangeComplete', handleComplete)
			router.events.off('routeChangeError', handleComplete)
		}
	}, [])

	const NavLink = ({ text, link }) => {
		return (
			<NextLink href={link}>
				<a className='p-1'>{text}</a>
			</NextLink>
		)
	}

	return (
		<div className='flex flex-col'>
			<Script
				strategy='afterInteractive'
				src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
			/>
			<Script
				id='gtag-init'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>
			<header className='sticky z-10 top-0 h-28 md:h-24 lg:h-20 w-full py-2 md:py-1 flex flex-row justify-between items-center text-sm bg-cyan-darker'>
				{router.pathname != '/' ? (
					<img src='/logo/fire.svg' className='h-14' />
				) : (
					<div className='h-1 w-1'></div>
				)}
				<nav className='flex flex-row justify- items-center gap-x-8'>
					<NavLink text='Events' link='/' />
					<NavLink text='Sponsors' link='/' />
					<NavLink text='About' link='/' />
					<button className='px-6 py-2 font-semibold text-black bg-yellow hover:opacity-90 rounded transition-all'>
						Join
					</button>
				</nav>
			</header>
			<Component {...pageProps} />
		</div>
	)
}
