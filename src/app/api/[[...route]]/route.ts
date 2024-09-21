import { Hono } from 'hono'
import { handle } from 'hono/vercel'

import bankRouter from './bank'

export const runtime = 'edge'

const api = new Hono().basePath('/api')

api.get('/hello', (c) => {
	return c.json({
		message: 'Hello Next.js!'
	})
})

api.route('/bank', bankRouter)

export const GET = handle(api)
export const POST = handle(api)
