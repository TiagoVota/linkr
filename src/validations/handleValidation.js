const handleValidation = (object, objectSchema) => {
	const objectError = objectSchema.validate(object).error
	const errorMessage = objectError?.details?.[0]?.message
	const error = Boolean(errorMessage) ? improveErrorText(errorMessage) : null
	
	return {
		isValid: !objectError,
		error
	}
}

const improveErrorText = (errorStr) => {
	const strReplaces = [
		['username', 'Name'],
		['email', 'E-mail'],
		['password', 'Password'],
		['picture', 'URL Picture'],
	]

	return strReplaces.reduce((acc, rep) => acc.replace(rep[0], rep[1]), errorStr)
}


export {
	handleValidation,
}
