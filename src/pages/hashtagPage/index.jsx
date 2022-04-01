import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'
import useReloadPosts from '../../hooks/useReloadPosts'

import api from '../../services/api.hashtags'
import { errorModal } from '../../factories/modalFactory'

import PageContainer from '../../components/pageContainer'
import PostLoading from '../../components/postLoading'
import Posts from '../../components/posts'
import NoPosts from '../../components/posts/noPosts'


function HashtagPage() {
	const { auth: { token } } = useAuth()
	const { reloadPostsObserver } = useReloadPosts()
	const [loading, setLoading] = useState(true)
	const [postsList, setPostsList] = useState([])
	const { hashtag } = useParams()

	function handleFailGetHashtag({ response: { status }}) {
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

		api.getHashtag(hashtag, token)
			.then(({ data }) => setPostsList(data))
			.catch(handleFailGetHashtag)
			.finally(() => setLoading(false))
	}, [token, hashtag, reloadPostsObserver])

	return (
		<>
			{loading ?
				<PostLoading/> : 
				<PageContainer title={`#${hashtag}`}>
					{postsList.length === 0 ? 
						<NoPosts message={'This hashtag doesn\'t exist'}/> : 
						<Posts postsList={postsList}/>}
				</PageContainer>
			}
		</>
	)
}


export default HashtagPage



