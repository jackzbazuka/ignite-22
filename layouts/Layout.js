import NextHead from 'next/head'
import NextLink from 'next/link'

export default function Layout({ children }) {
	const page = () => {
		return (
			<NextLink href='/'>
				<a className='h-full w-3/12 p-5 bg-pink-200 text-3xl'>Events</a>
			</NextLink>
		)
	}

	return (
		<div className='flex flex-row'>
			<NextHead>
				<title>Ignite 4.0</title>
				<link rel='icon' href='/favicon.ico' />
			</NextHead>
			<div className='w-3/4'>{children}</div>
			<header className='w-1/4'>
				<nav className='h-full w-full overflow-hidden'>
					<a className='h-full justify-self-stretch bg-f'>Events</a>
				</nav>
			</header>
		</div>
	)
}
