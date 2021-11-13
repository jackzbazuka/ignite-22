import Head from 'next/head'

export default function Layout({ children }) {
	return (
		<div className='h-screen grid place-items-center'>
			<Head>
				<title>Boilerplate</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{children}
		</div>
	)
}
