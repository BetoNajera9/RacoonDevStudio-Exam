import joi from 'joi'

export const initialTaskSchema = joi.object({
	name: joi.string().required().max(30),
	completed: joi.boolean().valid(false),
})

export const generalTaskSchema = joi.object({
	name: joi.string().required().max(30),
	completed: joi.boolean().required(),
})
