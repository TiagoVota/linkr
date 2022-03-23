import { useEffect, useState } from 'react'

import useAuth from '../../hooks/useAuth'

import { getTimelinePosts } from '../../services/api.posts'
import { errorModal } from '../../factories/modalFactory'

import PageContainer from '../../components/PageContainer'
import Post from '../../components/Post'

const mockLinkInfo = {
	title: 'Como aplicar o Material UI em um projeto React',
	description: 'Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.',
	image: 'https://i.pinimg.com/564x/de/01/a3/de01a3e6c508de7be5d5383dc55eef56.jpg',
}
const mockPosts = [
	{
		postId: 1,
		userId: 10,
		username: 'Fulano',
		picture: 'https://img.elo7.com.br/product/zoom/27B1D10/dragao-banguela-como-treinar-seu-dragao.jpg',
		link: 'https://www.google.com',
		message: 'Hello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello world',
		...mockLinkInfo,
	},
	{
		postId: 2,
		userId: 12,
		username: 'Fulano 2',
		picture: 'https://img.elo7.com.br/product/zoom/27B1D10/dragao-banguela-como-treinar-seu-dragao.jpg',
		link: 'https://www.google.com',
		message: 'Hello world 2',
		...mockLinkInfo,
	},
	{
		postId: 3,
		userId: 13,
		username: 'Fulano 3',
		picture: 'https://img.elo7.com.br/product/zoom/27B1D10/dragao-banguela-como-treinar-seu-dragao.jpg',
		link: 'https://www.google.com',
		message: 'Hello world 3',
		...mockLinkInfo,
	},
]

function Timeline() {
	const { auth: { token } } = useAuth()
	const [isLoading, setIsLoading] = useState(true)
	const [postsList, setPostsList] = useState([])

	function handleFailGetPosts(status) {
		const msgStatus = {
			401: 'Access denied, please try to login again!',
			500: 'An error occurred while trying to fetch the posts, please refresh the page 🥺'
		}

		const msgToSend = msgStatus[status] || 'Sorry, problems with our server 🥺'

		errorModal(msgToSend)
	}
	
	useEffect(() => {
		setIsLoading(true)

		getTimelinePosts({ token })
			.then(({ data }) => setPostsList(data))
			.catch(handleFailGetPosts)
			.finally(() => {
				setPostsList(mockPosts)  // TODO: REMOVE
				setIsLoading(false)
			})
	}, [token])

	return (
		<>
			<PageContainer title='timeline'>

				{ isLoading
					? <div>Loading...</div>
					: postsList.map((postInfo) => <Post
						key={postInfo.postId}
						postInfo={postInfo}
					/>)
				}

			</PageContainer>
		</>
	)
}


export default Timeline


