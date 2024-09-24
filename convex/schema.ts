import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
	users: defineTable({
		name: v.string(),
		// this the Clerk ID, stored in the subject JWT field
		externalId: v.string(),
		// this is the Plaid access token
		plaidAccessToken: v.optional(v.string())
	}).index('byExternalId', ['externalId'])
})
