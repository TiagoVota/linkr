const makeTimelinePostMessage = (postsResponse) => {
	const followNobodyMsg = `You don't follow anyone yet. Search for new friends!
	Tip: type 'all' in search ☺`
	const defaultMsg = 'No posts found from your friends ☹'

	const isUserWithNoFollow = typeof postsResponse === 'string'

	return Boolean(isUserWithNoFollow) ? followNobodyMsg : defaultMsg
}


export {
	makeTimelinePostMessage,
}
