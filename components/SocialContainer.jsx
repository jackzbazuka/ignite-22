import { motion } from 'framer-motion'

export default function SocialContainer({ children }) {
	return (
		<div className='grid place-items-center'>
			<motion.div className='p-10 grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-10'>
				{children}
			</motion.div>
		</div>
	)
}
