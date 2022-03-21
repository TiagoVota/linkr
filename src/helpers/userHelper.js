const sanitizeUsername = (name) => {
	const fistName = name.trim().split(' ')[0]
	return capitalizeString(fistName)
}

const capitalizeString = (str) => {
	return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
}


export {
	sanitizeUsername,
}
