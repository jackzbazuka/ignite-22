import PageContainer from '@/components/PageContainer'
import NavContainer from '@/components/NavContainer'
import NavLink from '@/components/NavLink'
import FloatingLogo from '@/components/FloatingLogo'
import Gallery from '@/components/Gallery'
import Footer from '@/components/footer'

export default function About() {
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
				<NavLink page='about' edge='right' />
			</NavContainer>
			<PageContainer>
				<FloatingLogo />
				<section className='w-3/4 font-semibold text-center text-lg'>
					IGNITE is the annual technical festival of NMIMS, Navi
					Mumbai. We started in the year 2019 with the aim to give a
					platform for the technologies of future and also to have a
					time of their lives amidst the perfect blend of amusement
					and illuminations for a better tomorrow.
				</section>
				
				<Gallery />
				<Footer />
			</PageContainer>
			
			<NavContainer>
				<NavLink page='events' edge='left' />
				<NavLink page='sponsors' edge='' />
				<NavLink page='contact' edge='right' />
			</NavContainer>
		
		</div>
	)
}
