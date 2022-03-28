import { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'

import useAuth from '../../../../hooks/useAuth'

import {
	makeLikeDataTip,
	makeLikesCountText
} from '../../../../helpers/likesHelper'

import { Container } from './styles'


const mockLikes = [
	{
		userId: 6,
		username: 'Fulano 1',
	},
	{
		userId: 2,
		username: 'Fulano 2',
	},
	{
		userId: 3,
		username: 'Fulano 3',
	},
	{
		userId: 4,
		username: 'Fulano 4',
	},
	{
		userId: 1,
		username: 'Fulano 5',
	},
]
function LikeAction({ postId, likes=mockLikes }) {
	const { auth: { authDetails: { id: myUserId } } } = useAuth()
	const [likesList, setLikesList] = useState(likes)
	const isLiked = likesList.some(({ userId }) => userId === myUserId)

	return (
		<Container data-tip={makeLikeDataTip(likesList, myUserId)} >
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
		</Container>
	)
}


export default LikeAction
