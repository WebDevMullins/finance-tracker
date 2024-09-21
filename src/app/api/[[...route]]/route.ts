import { Hono } from 'hono'
import { handle } from 'hono/vercel'

import bankRouter from './bank'
import createLinkTokenRouter from './create-token'
import exchangeTokenRouter from './exchange-token'

export const runtime = 'edge'

const api = new Hono().basePath('/api')

api.get('/hello', (c) => {
	return c.json({
		message: 'Hello Next.js!'
	})
})

api.route('/bank', bankRouter)
api.route('/create-token', createLinkTokenRouter)
api.route('/exchange-token', exchangeTokenRouter)

export const GET = handle(api)
export const POST = handle(api)
