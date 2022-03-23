import { useEffect, useState } from 'react'

import useAuth from '../../hooks/useAuth'

import { getTimelinePosts } from '../../services/api.posts'
import { errorModal } from '../../factories/modalFactory'

import Container from '../../components/Container'
import Header from '../../components/header'


const mockPosts = [
	{
		id: 1,
		userId: 10,
		username: 'Fulano',
		picture: 'https://img.elo7.com.br/product/zoom/27B1D10/dragao-banguela-como-treinar-seu-dragao.jpg',
		link: 'https://www.google.com',
		message: 'Hello world',
	},
	{
		id: 2,
		userId: 12,
		username: 'Fulano 2',
		picture: 'https://img.elo7.com.br/product/zoom/27B1D10/dragao-banguela-como-treinar-seu-dragao.jpg',
		link: 'https://www.google.com',
		message: 'Hello world 2',
	},
	{
		id: 3,
		userId: 13,
		username: 'Fulano 3',
		picture: 'https://img.elo7.com.br/product/zoom/27B1D10/dragao-banguela-como-treinar-seu-dragao.jpg',
		link: 'https://www.google.com',
		message: 'Hello world 3',
	},
]

function Timeline() {
	const { auth: { token } } = useAuth()
	const [isLoading, setIsLoading] = useState(true)
	const [postsList, setPostsList] = useState([])

	function handleFailGetPosts(status) {
		const msgStatus = {
			401: 'Access denied, please try to login again!',
			500: 'Our error, try again later, please 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problems with our server 🥺'

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
		<Container>
			<Header />
			
		</Container>
	)
}


export default Timeline


