export default function EventCard({
	img,
	title,
	summary,
	bgCol = 'bg-blue-400',
}) {
	return (
		<div
			className={`${bgCol} p-1 lg:p-3 group flex transform transition-all duration-300 hover:-rotate-3 hover:scale-105 rounded-xl shadow-xl`}>
			<div className='p-1 lg:p-3 flex flex-row items-center transform transition-all duration-300 group-hover:rotate-3 relative'>
				<img src={img} className='h-40 flex-shrink-0' />
				<div className='h-full p-1 lg:p-3 flex flex-col justify-start gap-y-3'>
					<h2 className='font-bold text-lg lg:text-xl text-left'>
						{title}
					</h2>
					<p className='text-sm lg:text-base text-left'>{summary}</p>
				</div>
				<button className='absolute bottom-2 right-2 px-3 py-2 flex flex-row items-center gap-x-1 bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 rounded-lg'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>{' '}
					Read more
				</button>
			</div>
		</div>
	)
}
