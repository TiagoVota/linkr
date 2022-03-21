const makeConfig = (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}

	return config
}


export {
	makeConfig,
}
