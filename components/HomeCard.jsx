import { motion } from 'framer-motion'
import NextImage from 'next/image'

export default function HomeCard({ text, filename }) {
	const variants = {
		visible: {
			// opacity: [0.3, 1, 0.3],
			filter: ['brightness(0.5)', 'brightness(1)', 'brightness(0.5)'],
			transition: {
				repeat: Infinity,
				repeatType: 'loop',
				repeatDelay: 3,
				duration: 3,
			},
		},
	}

	return (
		<motion.div
			className='flex flex-col justify-between items-center gap-y-5'
			variants={variants}>
			<div className='h-5 w-5 bg-white rounded-full' />
			<div className='flex flex-col items-center'>
				<NextImage
					className=''
					src={`/illustrations/${filename}`}
					height={80}
					width={80}
					priority={true}
				/>
				<p className='font-medium'>{text}</p>
			</div>
		</motion.div>
	)
}
