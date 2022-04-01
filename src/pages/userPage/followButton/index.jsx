import { useState } from 'react'

import useAuth from '../../../hooks/useAuth'

import api from '../../../services/api.follow'
import { errorModal } from '../../../factories/modalFactory'

import LoaderSpinner from '../../../components/loaderSpinner'

import { ButtonContainer } from './styles'


const FollowButton = ({ followId, currentFollowState, isHidden }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [isFollowing, setIsFollowing] = useState(currentFollowState)
	const { auth: { token } } = useAuth()
	const followText = Boolean(isFollowing) ? 'Unfollow' : 'Follow'
	
	function handleFailGetPosts({ response: { status }}) {
		const msgStatus = {
			401: 'Access denied, please try to <a href=\'/\'>login</a> again!',
			404: 'You already unfollow this user!',
			409: 'You already follow this user!',
			500: 'Sorry, problems with our server. Refresh the page or try later, please 🥺'
		}
		const defaultMsg = 'An error occurred while trying to fetch the posts, please refresh the page 🥺'

		const msgToSend = msgStatus[status] || defaultMsg

		errorModal(msgToSend)
	}

	function handleFollowClick() {
		const action = (isFollowing) ? 'unfollow' : 'follow'
		const apiFunction = {
			'follow': api.insertFollow,
			'unfollow': api.deleteFollow,
		}

		setIsLoading(true)
		apiFunction[action]({ token, userId: followId })
			.then(() => setIsFollowing(!isFollowing))
			.catch(handleFailGetPosts)
			.finally(() => setIsLoading(false))
	}

	if (isHidden) return <></>

	return (
		<ButtonContainer
			onClick={handleFollowClick}
			isFollowing={isFollowing}
			isDisable={isLoading}
			disabled={isLoading}
		>
			{
				isLoading
					? <LoaderSpinner
						color={isFollowing ? '#1877F2' : '#FFFFFF'}
						height={'40px'}
					/>
					: followText
			}
		</ButtonContainer>
	)
}


export default FollowButton
