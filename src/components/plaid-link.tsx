import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import { PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'
import { Button } from './ui/button'

// interface LinkProps {
// 	token: string | null
// }

const PlaidLink = () => {
	const router = useRouter()

	const [token, setToken] = useState(null)

	const createLinkToken = async () => {
		const response = await fetch('/api/create-token', {
			method: 'GET'
		})
		const data = await response.json()
		console.log('link_token', data.link_token)
		setToken(data.link_token)
	}

	useEffect(() => {
		createLinkToken()
	}, [])

	const onSuccess = useCallback(async (public_token: string) => {
		await fetch('/api/exchange-token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ public_token: public_token })
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
