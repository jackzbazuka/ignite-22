import PageContainer from '@/components/PageContainer'
import NavContainer from '@/components/NavContainer'
import NavLink from '@/components/NavLink'
import FloatingLogo from '@/components/FloatingLogo'
import SocialContainer from '@/components/SocialContainer'
import SocialCard from '@/components/SocialCard'

export default function Contact() {
	return (
		<div className='h-full flex flex-row'>
			<NavContainer>
				<NavLink page='home' edge='left' />
				<NavLink page='about' edge='' />
				<NavLink page='events' edge='' />
				<NavLink page='sponsors' edge='' />
				<NavLink page='contact' edge='right' />
			</NavContainer>
			<PageContainer>
				<FloatingLogo />
				<SocialContainer>
					<SocialCard
						icon='/illustrations/instagram.webp'
						text='Heart that post.'
						col='bg-pink-500 lg:hover:bg-pink-500'
					/>
					<SocialCard
						icon='/illustrations/twitter.webp'
						text='Follow the trend.'
						col='bg-cyan-500 lg:hover:bg-cyan-500'
					/>
					<SocialCard
						icon='/illustrations/discord.webp'
						text='Join the server.'
						col='bg-indigo-500 lg:hover:bg-indigo-500'
					/>
					<SocialCard
						icon='/illustrations/youtube.webp'
						text='Catch us live.'
						col='bg-rose-500 lg:hover:bg-rose-500'
					/>
					<SocialCard
						icon='/illustrations/whatsapp.webp'
						text='Check your DMs.'
						col='bg-green-500 lg:hover:bg-green-500'
					/>
					<SocialCard
						icon='/illustrations/gmail.webp'
						text='Those Emails.'
						col='bg-white lg:hover:bg-white'
						textcol='text-black lg:hover:text-black'
					/>
				</SocialContainer>
			</PageContainer>
		</div>
	)
}
