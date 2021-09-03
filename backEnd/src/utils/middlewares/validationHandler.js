import response from '../network/log'

// validation schema on scope
const validate = (data, schema) => {
	try {
		const { error } = schema.validate(data)
		return error
	} catch ({ message }) {
		response.error(message)
	}
}

// validation error, if it differs of validation schema
const validationHandler = (schema, check = 'body') => {
	return (req, res, next) => {
		const error = validate(req[check], schema)
		error ? next(new Error(error)) : next()
	}
}

export default validationHandler
