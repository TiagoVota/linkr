import { useState } from 'react'

import { ButtonContainer } from './styles'


const FollowButton = ({ userId, isFollowing, isHidden }) => {
	const [isLoading, setIsLoading] = useState(false)


	if (isHidden) return <></>

	return (
		<ButtonContainer
			isFollowing={isFollowing}
			isDisable={isLoading}
		>
			{isFollowing ? 'Unfollow' : 'Follow'}
		</ButtonContainer>
	)
}


export default FollowButton
