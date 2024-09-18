'use client'

import { useUser } from '@clerk/nextjs'

import HeaderBox from '@/components/header-box'
import TotalBalanceBox from '@/components/total-balance-box'

export default function DashboardPage() {
	const { user } = useUser()
	return (
		<div className='container py-12'>
			<div className='overflow-hidden rounded-[0.5rem] border bg-background shadow'>
				<div className='hidden h-full flex-1 flex-col space-y-8 p-8 md:flex'>
					<HeaderBox
						type='greeting'
						title='Welcome,'
						user={user?.firstName || 'Guest'}
						subtext='Access and manage your account and transactions here.'
					/>
					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={999.99}
					/>
				</div>
			</div>
		</div>
	)
}
