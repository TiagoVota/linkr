function makeSearchName(search) {
	const isAllUsersSearch = (search.toLowerCase() === 'all')
	return isAllUsersSearch ? '' : search
}


export {
	makeSearchName,
}
