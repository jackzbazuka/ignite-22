export default function Home() {
	return (
		<div className='mt-60 w-full grid place-items-center bg-transparent'>
			<div className='flex flex-row'>
				<object
					type='image/svg+xml'
					data='/logo/animated-fire.svg'
					className='h-72 bg-transparent'
				/>
				<object
					type='image/svg+xml'
					data='/logo/text.svg'
					className='h-52 self-end bg-transparent'
				/>
			</div>
		</div>
	)
}
