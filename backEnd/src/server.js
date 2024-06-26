import express from 'express'
import cors from 'cors'

import { api } from './config/envServer'
import routes from './routes'

const app = express()

// Middlewares
if (api.env !== 'production') {
	app.use(express.json())
	app.use(cors('*'))
} else {
	const helmet = require('helmet')

	app.use(cors(api.cors))
	app.use(helmet())
	app.use(helmet.permittedCrossDomainPolicies())
	app.disable('x-powered-by')
}

// Routes
app.get('/', (req, res, next) => {
	res.redirect('/api')
})
app.use('/api', routes)

if (api.env !== 'test') {
	app.listen(api.port, (err) => {
		if (err) console.error(err)
		else console.log(`=> Server on port ${api.port}`)
	})
}

export default app
