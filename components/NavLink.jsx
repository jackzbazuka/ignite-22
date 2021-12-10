import NextLink from 'next/link'

export default function NavLink({ page, edge }) {
	const pagePath = page.toLowerCase()

	return (
		<div
			exit={{
				scale: 5,
				transition: {
					duration: 3,
				},
			}}>
			<NextLink href={`/${pagePath === 'home' ? '' : pagePath}`}>
				<a
					className={`${
						edge === 'left'
							? 'origin-left'
							: edge === 'right'
							? 'origin-right'
							: 'origin-center'
					} ${
						pagePath === 'home'
							? 'bg-coffee'
							: pagePath === 'about'
							? 'bg-rich-black'
							: pagePath === 'events'
							? 'bg-jungle-green'
							: pagePath === 'sponsors'
							? 'bg-feldgrau'
							: pagePath === 'contact'
							? 'bg-shadow'
							: ''
					} h-full w-full md:px-3 lg:px-4 hidden md:flex flex-col justify-center place-items-center transition-all duration-300 transform hover:scale-x-110`}>
					{page
						.toUpperCase()
						.split('')
						.map((char) => (
							<span key={char}>{char}</span>
						))}
				</a>
			</NextLink>
		</div>
	)
}
