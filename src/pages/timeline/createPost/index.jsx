import { useState } from 'react'
import { Create, Link, Message, Form, Button, Avatar } from './styles'
import { errorModal, successModal } from '../../../factories/modalFactory'
import { getTimelinePosts } from '../../../services/api.posts'
import useAuth from '../../../hooks/useAuth'
import api from '../../../services/api.post'

function CreatePost({setPost}) {
	const [link, setLink] = useState('')
	const [message, setMessage] = useState('')
	const [disable, setDisable] = useState(false)
	const { auth: { token } } = useAuth()
	const {auth} = useAuth()

	function handleSubmit(event) {
		event.preventDefault()
		setDisable(true)

		const body = {
			link: link,
			message: message,
		}

		const config =  {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		}

		const promise = api.createPost(body, config)

		promise.then((response) => {
			successModal('Post publicado!')
			setMessage('')
			setLink('')
			setDisable(false)
			getTimelinePosts({ token })
				.then(({ data }) => setPost(data))
		})

		promise.catch((error) => {
			errorModal('Houve um erro ao publicar seu link')
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
				<Button type='submit' disabled={disable}>{disable ? 'Publishing' : 'Publish'}</Button>
			</Form>
		</Create>
	)
}

export default CreatePost