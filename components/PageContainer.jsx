export default function PageContainer({ children, start = true }) {
	return (
		<div
			className={`w-full flex flex-col ${
				start ? 'justify-start' : 'justify-between'
			} items-center gap-y-20 overflow-y-scroll`}>
			{children}
		</div>
	)
}
