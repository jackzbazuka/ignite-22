import PageContainer from '@/components/PageContainer'
import NavContainer from '@/components/NavContainer'
import NavLink from '@/components/NavLink'
import FloatingLogo from '@/components/FloatingLogo'

export default function Sponsors() {
	const container = {
		hidden: {
			opacity: 0.1,
		},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 2,
			},
		},
	}

	return (
		<div className='h-full flex flex-row'>
			<NavContainer>
				<NavLink page='home' edge='left' />
				<NavLink page='about' edge='' />
				<NavLink page='events' edge='' />
				<NavLink page='sponsors' edge='right' />
			</NavContainer>
			<PageContainer>
				<FloatingLogo />
			</PageContainer>
			<NavContainer>
				<NavLink page='contact' edge='right' />
			</NavContainer>
		</div>
	)
}
