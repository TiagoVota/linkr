import { useEffect, useState } from 'react'

import useAuth from '../../hooks/useAuth'

import { getTimelinePosts } from '../../services/api.posts'
import { errorModal } from '../../factories/modalFactory'

import CreatePost from './createPost'

import PageContainer from '../../components/pageContainer'
import Posts from '../../components/posts'
import PostLoading from '../../components/postLoading'

function Timeline() {
	const { auth: { token } } = useAuth()
	const [isLoading, setIsLoading] = useState(true)
	const [postsList, setPostsList] = useState([])


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
		setIsLoading(true)

		getTimelinePosts({ token })
			.then(({ data }) => {
				return setPostsList(data)
			})
			.catch(handleFailGetPosts)
			.finally(() => setIsLoading(false))
	}, [token])

	return (
		<PageContainer title='timeline'>
			<CreatePost setPost={setPostsList}/>
			{ isLoading
				? <PostLoading />
				: <Posts postsList={postsList} />
			}
		</PageContainer>
	)
}


export default Timeline


