function makeLikeDataTip(likesList, myUserId) {
	if (likesList.length === 0) return 'No likes yet ☹'
	
	const sortedLikesList = sortList(likesList, myUserId)
	const len = sortedLikesList.length
	const [
		{ username: firstName }={},
		{ username: secondName }={},
		{ username: thirdName }={},
	] = sortedLikesList


	if (len === 1) return `${firstName}`
	if (len === 2) return `${firstName} and ${secondName}`
	if (len === 3) `${firstName}, ${secondName} and ${thirdName}`
	return `${firstName}, ${secondName} and ${len-2} others`
}

function sortList(likesList, myUserId) {
	const otherLikesList = likesList.filter(({ userId }) => userId !== myUserId)

	const isLiked = otherLikesList.length !== likesList.length
	if (!isLiked) return [ ...likesList ]

	const myLike = { userId: myUserId, username: 'You' }
	return [ myLike, ...otherLikesList ]
}


function makeLikesCountText(likesList) {
	const len = likesList.length

	return Boolean(len === 1) ? '1 like' : `${len} likes`
}


export {
	makeLikeDataTip,
	makeLikesCountText,
}
