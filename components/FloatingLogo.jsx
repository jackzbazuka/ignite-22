export default function FloatingLogo() {
	return (
		<div className='w-full sticky top-0 z-10 py-5 flex flex-row justify-center items-center bg-transparent backdrop-filter backdrop-blur-lg'>
			<img
				src='/logo/fire.svg'
				className='h-12 md:h-14 lg:h-16 bg-transparent'
			/>
		</div>
	)
}
