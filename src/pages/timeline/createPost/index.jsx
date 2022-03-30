import { useState } from 'react'
import { Create, Link, Message, Form, Button, Avatar } from './styles'
import { errorModal, successModal } from '../../../factories/modalFactory'
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

		const promise = api.createPost(body, token)

		promise.then((response) => {
			successModal('Post published!')
			setMessage('')
			setLink('')
			setDisable(false)
			api.getTimelinePosts({ token })
				.then(({ data }) => setPost(data))
		})

		promise.catch((error) => {
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
