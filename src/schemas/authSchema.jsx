import joi from 'joi'

const loginSchema = joi.object({
	email: joi.string().email({ tlds: { allow: false } }),
	password: joi.string().min(5).max(80).required()
}).length(2)

export default loginSchema