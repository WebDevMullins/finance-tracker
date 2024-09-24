import { httpRouter } from 'convex/server'
import { updateClerkUser } from './clerk'

const http = httpRouter()

http.route({
	path: '/clerk-users-webhook',
	method: 'POST',
	handler: updateClerkUser
})

export default http
