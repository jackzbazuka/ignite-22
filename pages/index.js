import { useEffect, useState, Component } from 'react'
import FlipCountdown from './flip'

export default function Home() {
	const today = new Date(2021, 12, 5)
	const endDate = new Date(2022, 3, 20)

	const days = Math.floor((endDate - today) / (1000 * 60 * 60 * 24))
	const weeks = Math.floor(days / 7)
	const hours = parseInt((Math.abs(endDate - today) / (1000 * 60 * 60)) % 24)
	const minutes = parseInt(
		(Math.abs(endDate.getTime() - today.getTime()) / (1000 * 60)) % 60
	)

	useEffect(() => {
		console.log(
			`Days: ${days} Weeks: ${weeks} Hours: ${hours} Minutes: ${minutes}`
		)
	})

	return (
		<div className='mt-14 w-full grid place-items-center bg-transparent'>
			<div className='flex flex-col lg:flex-row'>
				<object
					type='image/svg+xml'
					data='/logo/animated-fire.svg'
					className='h-48 md:h-56 lg:h-64 bg-transparent'
				/>
				<object
					type='image/svg+xml'
					data='/logo/text.svg'
					className='h-24 md:h-32 lg:h-42 self-end bg-transparent'
				/>
			</div>
			{/* <span className='mt-5 font-bold text-5xl lining-nums'>
				{`00`}:{`29`}:{`00`}:{`32`}
			</span> */}
			<div className='pt-10 mt-5'>
			<FlipCountdown
			hideYear='true'
			titlePosition='bottom' 
			size='large'
                endAt={'2022-03-20 01:26:58'} // Date/Time
            />
			</div>
			
			<div className='mt-20 w-full'>
				<div className='mx-auto h-2 w-3/4 flex flex-row justify-around items-center bg-cyan rounded-md'>
					<div className='h-5 w-5 bg-white rounded-full' />
					<div className='h-5 w-5 bg-white rounded-full' />
					<div className='h-5 w-5 bg-white rounded-full' />
				</div>
			</div>
		</div>
	)
}
