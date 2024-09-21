import { plaidClient } from '@/lib/plaid'
import { Hono } from 'hono'
import { CountryCode, Products } from 'plaid'

const app = new Hono()

const clientUserId = '123'

app.get('/', async (c) => {
	// const clientUserId = c.req.param('id')
	try {
		const tokenResponse = await plaidClient.linkTokenCreate({
			client_id: process.env.PLAID_CLIENT_ID || '',
			user: { client_user_id: clientUserId || '' },
			client_name: 'Finance App',
			language: 'en',
			products: (process.env.PLAID_PRODUCTS || '').split(',') as Products[],
			country_codes: (process.env.PLAID_COUNTRY_CODES || '').split(
				','
			) as CountryCode[],
			redirect_uri: process.env.PLAID_SANDBOX_REDIRECT_URI
		})
		console.log(tokenResponse.data)
		return c.json(tokenResponse.data)
	} catch (error) {
		console.error(error)

		return c.json({ message: error })
	}
})

export default app
