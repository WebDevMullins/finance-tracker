export default function DashboardPage() {
	return (
		<div className='container py-12'>
			<div className='overflow-hidden rounded-[0.5rem] border bg-background shadow'>
				<div className='hidden h-full flex-1 flex-col space-y-8 p-8 md:flex'>
					<div className='flex items-center justify-between space-y-2'>
						<div>
							<h2 className='text-2xl font-bold tracking-tight'>Dashboard</h2>
							<p className='text-muted-foreground'>
								Welcome back, user!
								{/* Welcome back, {user?.firstName}! */}
							</p>
						</div>
						<div className='flex items-center space-x-2'></div>
					</div>
					{/* Charts go here */}
				</div>
			</div>
		</div>
	)
}
