import { plaidClient } from '@/lib/plaid'
import { Hono } from 'hono'
import { setCookie } from 'hono/cookie'

const app = new Hono()

app.post('/', async (c) => {
	const body = await c.req.json()
	const exchangeResponse = await plaidClient.itemPublicTokenExchange({
		public_token: body.public_token
	})

	setCookie(c, 'plaid_exchange_token', exchangeResponse.data.access_token, {
		httpOnly: true,
		secure: true
	})
	return c.json({ ok: true })
})

export default app
