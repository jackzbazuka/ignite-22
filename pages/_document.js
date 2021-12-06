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
				<body className='m-0 px-10 lg:px-20 text-white bg-cyan-darker'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
