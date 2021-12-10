import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head />
				<body className='m-0 p-0 text-white bg-gradient-radial from-shadow to-rich-black font-sans select-none scroll-smooth'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
