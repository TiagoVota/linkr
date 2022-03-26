import { useEffect, useState } from 'react'

import useAuth from '../../hooks/useAuth'

import { errorModal } from '../../factories/modalFactory'

import PageContainer from '../../components/pageContainer'
import Posts from '../../components/posts'
import PostLoading from '../../components/postLoading'
import api from '../../services/api.user'
import { useParams } from 'react-router-dom'
import NoPosts from '../../components/posts/noPosts'

function UserPage() {
	const { auth: { token } } = useAuth()
	const [loading, setLoading] = useState(true)
	const [postsList, setPostsList] = useState([])
	const {userId} = useParams()

	function handleFailGetPosts({ response: { status }}) {
		const msgStatus = {
			401: 'Access denied, please try to <a href=\'/\'>login</a> again!',
			500: 'Sorry, problems with our server. Refresh the page or try later, please 🥺'
		}
		const defaultMsg = 'An error occurred while trying to fetch the posts, please refresh the page 🥺'

		const msgToSend = msgStatus[status] || defaultMsg

		errorModal(msgToSend)
	}
	
	useEffect(() => {
		setLoading(true)

		const promise = api.getUserPosts(userId, token)

		promise.then((response) => {
			setPostsList(response.data)
			setLoading(false)
		})

		promise.catch(() => {
			handleFailGetPosts
			setLoading(false)
		})
	}, [token])

	return (
		<>
			{loading ?
				<PostLoading />
				:
				<PageContainer title={postsList[0]?.username} picture={postsList[0]?.picture}>
					{postsList.length === 0 ? 
						<NoPosts message={'This user doesn\'t exist'}/> :
						<Posts postsList={postsList} />
					}
				</PageContainer>
			}
		</>
	)
}

export default UserPage