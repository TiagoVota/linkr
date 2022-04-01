import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'
import useReloadPosts from '../../hooks/useReloadPosts'

import api from '../../services/api.user'
import { errorModal } from '../../factories/modalFactory'

import PageContainer from '../../components/pageContainer'
import Posts from '../../components/posts'
import PostLoading from '../../components/postLoading'
import NoPosts from '../../components/posts/noPosts'
import Scroller from '../../components/infiniteScroller'


function UserPage() {
	const { auth: { token } } = useAuth()
	const { reloadPostsObserver } = useReloadPosts()
	const [loading, setLoading] = useState(true)
	const [postsList, setPostsList] = useState([])
	const { userId } = useParams()
	const [offset, setOffset] = useState(0)

	const username = postsList[0]?.username
	const title = Boolean(username) ? `${username}'s posts` : ''
	const picture = postsList[0]?.picture

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

		const promise = api.getUserPosts(offset, userId, token)

		promise.then((response) => {
			setOffset(0)
			setPostsList(response.data)
			setLoading(false)
		})

		promise.catch(() => {
			handleFailGetPosts
			setLoading(false)
		})
	}, [token, userId, reloadPostsObserver])

	return (
		<>
			{loading ?
				<PostLoading />
				:
				<PageContainer title={title} picture={picture}>
					{postsList.length === 0 ? 
						<NoPosts message={'This user doesn\'t exist'}/> :
						<Scroller 
							setOffset={setOffset}
							offset={offset} 
							setPostsList={setPostsList}
							postsList={postsList}
							user={postsList}
						/>
					}
				</PageContainer>
			}
		</>
	)
}

export default UserPage
