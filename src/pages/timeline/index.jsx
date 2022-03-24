import { useEffect, useState } from 'react'

import useAuth from '../../hooks/useAuth'

import { getTimelinePosts } from '../../services/api.posts'
import { errorModal } from '../../factories/modalFactory'

import PageContainer from '../../components/pageContainer'
import Posts from '../../components/posts'
import PostLoading from '../../components/postLoading'


function Timeline() {
	const { auth: { token } } = useAuth()
	const [isLoading, setIsLoading] = useState(true)
	const [postsList, setPostsList] = useState([])

	function handleFailGetPosts(status) {
		const msgStatus = {
			401: 'Access denied, please try to login again!',
			500: 'Sorry, problems with our server, please refresh the page 🥺'
		}
		const defaultMsg = 'An error occurred while trying to fetch the posts, please refresh the page 🥺'

		const msgToSend = msgStatus[status] || defaultMsg

		errorModal(msgToSend)
	}
	
	useEffect(() => {
		setIsLoading(true)

		getTimelinePosts({ token })
			.then(({ data }) => setPostsList(data))
			.catch(handleFailGetPosts)
			.finally(() => setIsLoading(false))
	}, [token])

	return (
		<PageContainer title='timeline'>
			{ isLoading
				? <PostLoading />
				: <Posts postsList={postsList} />
			}
		</PageContainer>
	)
}


export default Timeline


