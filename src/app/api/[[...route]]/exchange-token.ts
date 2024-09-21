import { plaidClient } from '@/lib/plaid'
import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c) => {
	const public_token = (await c.req.json()).public_token
	try {
		const exchangeResponse = await plaidClient.itemPublicTokenExchange({
			public_token,
			client_id: process.env.PLAID_CLIENT_ID || '',
			secret: process.env.PLAID_SECRET || ''
		})
		const accessToken = exchangeResponse.data.access_token
		console.log('access_token', accessToken)
		//TODO: Save the access token to the db
		return c.json({ access_token: accessToken })
	} catch (error) {
		console.error(error)

		return c.json({ message: error })
	}
})

export default app
