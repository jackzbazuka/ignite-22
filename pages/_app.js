import { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import '@/styles/Timer.scss'
import '@/styles/Gallery.scss'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
	const [loading, setLoading] = useState(false)
	const variants = {
		hidden: { opacity: 0, x: -200, y: 0 },
		enter: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				duration: 3,
			},
		},
		exit: {
			opacity: 0,
			x: 0,
			y: -100,
			transition: {
				duration: 3,
			},
		},
	}

	useEffect(() => {
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
		<div className='h-screen w-full'>
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} />
			</AnimatePresence>
		</div>
	)
}
