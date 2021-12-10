export default function EventContainer({ children }) {
	return (
		<div className='w-11/12 lg:w-5/6 p-3 lg:p-5 grid grid-cols-1 lg:grid-cols-2 auto-rows-fr gap-10'>
			{children}
		</div>
	)
}
