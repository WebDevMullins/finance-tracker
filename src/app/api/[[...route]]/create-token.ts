import { plaidClient } from '@/lib/plaid'
import { Hono } from 'hono'
import { CountryCode, Products } from 'plaid'

const app = new Hono()

app.post('/', async (c) => {
	const tokenResponse = await plaidClient.linkTokenCreate({
		user: { client_user_id: process.env.PLAID_CLIENT_ID || '' },
		client_name: "Plaid's Tiny Quickstart",
		language: 'en',
		products: (process.env.PLAID_PRODUCTS || '').split(',') as Products[],
		country_codes: (process.env.PLAID_COUNTRY_CODES || '').split(
			','
		) as CountryCode[],
		redirect_uri: process.env.PLAID_SANDBOX_REDIRECT_URI
	})
	console.log(tokenResponse.data.link_token)
	return c.json(tokenResponse.data.link_token)
})

export default app
