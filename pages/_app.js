import 'tailwindcss/tailwind.css'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '@/layouts/Layout'
import Loading from '@/components/Loading'
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

	return (
		<div className='flex flex-row'>
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
			<Component {...pageProps} />
		</div>
	)
}
