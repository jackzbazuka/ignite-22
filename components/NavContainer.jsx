export default function NavContainer({ children }) {
	return (
		<nav className='h-full hidden md:flex flex-row font-semibold font-sans text-sm'>
			{children}
		</nav>
	)
}
