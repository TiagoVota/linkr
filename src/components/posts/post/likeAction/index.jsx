import { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'

import useAuth from '../../../../hooks/useAuth'

import api from '../../../../services/api.like'
import {
	makeLikeDataTip,
	makeLikesCountText
} from '../../../../helpers/likesHelper'

import { ContainerButton } from './styles'


function LikeAction({ postId, likes }) {
	const { auth: { authDetails: { id: myUserId }, token } } = useAuth()
	const [likesList, setLikesList] = useState(likes || [])
	const [isLoading, setIsLoading] = useState(false)
	const isLiked = likesList.some(({ userId }) => userId === myUserId)
	
	function handleLikeClick() {
		const action = (isLiked) ? 'dislike' : 'like'
		const apiFunction = {
			'like': api.insertLike,
			'dislike': api.deleteLike,
		}

		setIsLoading(true)
		updateMyLikeList(action)

		apiFunction[action]({ token, postId })
			.catch(() => setLikesList(likesList))
			.finally(() => setIsLoading(false))
	}

	function updateMyLikeList(action) {
		const myLike = { userId: myUserId, username: 'You' }
		const updatedList = {
			'like': [ myLike, ...likesList ],
			'dislike': likesList.filter(({ userId }) => userId !== myUserId),
		}

		setLikesList(updatedList[action])
	}

	return (
		<ContainerButton
			onClick={handleLikeClick}
			isDisable={isLoading}
			data-tip={makeLikeDataTip(likesList, myUserId)}
		>
			{ Boolean(isLiked)
				? <IoHeart
					color='#AC0000'
					size='27px'

				/>
				: <IoHeartOutline
					color='#FFFFFF'
					size='27px'
				/>
			}

			<ReactTooltip
				type='light'
				textColor='#505050'
				place='bottom'
				effect='solid'
			/>

			<p>
				{makeLikesCountText(likesList)}
			</p>
		</ContainerButton>
	)
}


export default LikeAction
