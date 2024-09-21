import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import { PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'
import { Button } from './ui/button'

const PlaidLink = () => {
	const router = useRouter()

	const [token, setToken] = useState(null)

	useEffect(() => {
		const createLinkToken = async () => {
			const response = await fetch('/api/create-token', {
				method: 'POST'
			})
			const data = await response.json()
			console.log('link_token', data)
			setToken(data)
		}
		createLinkToken()
	}, [])

	const onSuccess = useCallback(async (publicToken: string) => {
		await fetch('/api/exchange-token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ public_token: publicToken })
		})
		router.push('/dashboard')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const config: PlaidLinkOptions = {
		token,
		onSuccess
	}

	const { open, ready } = usePlaidLink(config)

	return (
		<Button
			onClick={() => open()}
			disabled={!ready}
			className='plaidlink-default'>
			<Image
				src='/icons/connect-bank.svg'
				alt='connect bank'
				width={24}
				height={24}
			/>
			<p className='text-black-2 text-[16px] font-semibold'>Connect bank</p>
		</Button>
	)
}

export default PlaidLink
