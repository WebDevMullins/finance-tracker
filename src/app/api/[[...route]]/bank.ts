import { Hono } from 'hono'

interface Bank {
	id: string
	name: string
	balance: number
}

const banks: Bank[] = [
	{
		id: '1',
		name: 'Bank of America',
		balance: 1000
	},
	{
		id: '2',
		name: 'Chase',
		balance: 3000
	}
]

const app = new Hono()

app.get('/', async (c) => {
	const accounts = await banks.map((bank: Bank) => ({
		id: bank.id,
		name: bank.name,
		balance: bank.balance
	}))
	const totalBanks = accounts.length
	const totalCurrentBalance = accounts.reduce((total, account) => {
		return total + account.balance
	}, 0)

	return c.json({ data: accounts, totalBanks, totalCurrentBalance })
})

export default app
