const HeaderBox = ({
	type = 'title',
	title,
	subtext,
	user
}: HeaderBoxProps) => {
	return (
		<div className='flex flex-col gap-1'>
			<h1 className='text-xl font-semibold lg:text-3xl'>
				{title}
				{type === 'greeting' && (
					<span className='text-bankGradient'>&nbsp;{user}!</span>
				)}
			</h1>
			<p className='text-sm text-muted-foreground lg:text-base'>{subtext}</p>
		</div>
	)
}

export default HeaderBox
