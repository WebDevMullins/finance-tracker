import AnimatedCounter from './animated-counter'
// import DoughnutChart from './DoughnutChart';

const TotalBalanceBox = ({
	accounts = [],
	totalBanks,
	totalCurrentBalance
}: TotalBalanceBoxProps) => {
	return (
		<section className='shadow-chart flex w-full items-center gap-4 rounded-xl border border-muted p-4 sm:gap-6 sm:p-6'>
			{/* <div className="flex size-full max-w-[100px] items-center sm:max-w-[120px]">
        <DoughnutChart accounts={accounts} />
      </div> */}

			<div className='flex flex-col gap-6'>
				<h2 className='text-lg font-semibold'>Bank Accounts: {totalBanks}</h2>
				<div className='flex flex-col gap-2'>
					<p className='text-sm font-medium text-muted-foreground'>
						Total Current Balance
					</p>

					<div className='flex-center flex-1 gap-2 text-2xl font-semibold lg:text-3xl'>
						<AnimatedCounter amount={totalCurrentBalance} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default TotalBalanceBox
