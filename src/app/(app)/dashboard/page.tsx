'use client'

import { useUser } from '@clerk/nextjs'

import HeaderBox from '@/components/header-box'
import TotalBalanceBox from '@/components/total-balance-box'
import { useEffect, useState } from 'react'

export default function DashboardPage() {
	const { user } = useUser()
	const [accounts, setAccounts] = useState<{
		totalBanks: number
		totalCurrentBalance: number
	} | null>(null)

	useEffect(() => {
		async function fetchAccounts() {
			const res = await fetch('/api/bank')
			const data = await res.json()
			setAccounts(data)
		}
		fetchAccounts()
	}, [])

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
						totalBanks={accounts?.totalBanks ?? 0}
						totalCurrentBalance={accounts?.totalCurrentBalance ?? 0}
					/>
				</div>
			</div>
		</div>
	)
}
