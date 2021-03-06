import { useState } from 'react'

import useAuth from '../../../hooks/useAuth'
import useReloadPosts from '../../../hooks/useReloadPosts'

import api from '../../../services/api.post'
import { errorModal, successModal } from '../../../factories/modalFactory'

import { Create, Link, Message, Form, Button, Avatar } from './styles'


function CreatePost({setOffset, offset, setPostsList, setNumberOfNewPosts}) {
	const [link, setLink] = useState('')
	const [message, setMessage] = useState('')
	const [disable, setDisable] = useState(false)
	const { auth: { token } } = useAuth()
	const { warnReloadPosts } = useReloadPosts()
	const {auth} = useAuth()

	function handleSubmit(event) {
		event.preventDefault()
		setDisable(true)

		const body = {
			link: link,
			message: message,
		}

		const promise = api.createPost(body, token)

		promise.then(() => {
			successModal('Post published!')
			setMessage('')
			setLink('')
			setDisable(false)
			setOffset(0)

			api.getTimelinePosts(offset, token)
				.then(({ data }) => {
					setNumberOfNewPosts(0)
					setPostsList(data)
					warnReloadPosts()
				})
		})

		promise.catch(() => {
			errorModal('There was an error publishing your link!')
			setDisable(false)
		})
	}

	return (
		<Create>
			<Avatar> <img src = {auth.authDetails.picture}/> </Avatar>
			<div>What are you going to share today?</div>
			<Form onSubmit={handleSubmit}>
				<Link 
					type="url" 
					value={link} 
					onChange={(e) => setLink(e.target.value)} 
					placeholder='http://...'
					required
					disabled={disable}>
				</Link>
				<Message 
					type="text" 
					value={message}
					onChange={(e) => setMessage(e.target.value)} 
					placeholder='Awesome article about #javascript'
					disabled={disable}>
				</Message>
				<Button type='submit' disabled={disable}>
					{disable ? 'Publishing' : 'Publish'}
				</Button>
			</Form>
		</Create>
	)
}

export default CreatePost
