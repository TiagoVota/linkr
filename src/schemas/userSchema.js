import joi from 'joi'

const signUpSchema = joi.object({
	username: joi.string().min(2).max(80).required(),
	email: joi.string().email({ tlds: { allow: false } }),
	password: joi.string().min(5).max(80).required(),
	picture: joi.string().uri().required()
}).length(4)

export default signUpSchema
