import { useMemo, useState } from 'react'
import { Create, Link, Message, Form, Button, Avatar } from '../styles'

import useAuth from '../../../hooks/useAuth'
import api from '../../../services/api.post'
import { errorModal, successModal } from '../../../factories/modalFactory'


function CreatePost() {
	const [link, setLink] = useState('')
	const [message, setMessage] = useState('')
	const [disable, setDisable] = useState(false)
	const {auth, picture} = useAuth()

	function handleSubmit(event) {
		event.preventDefault()
		setDisable(true)

		const body = {
			url: link,
			message: message
		}

		const config =  {
			headers: {
				'Authorization': `Bearer ${auth}`
			}
		}

		const promise = api.createPost(body, config)
		promise.then((response) => {
			successModal('Post publicado!')
			setMessage('')
			setLink('')
			setDisable(false)
		})
		
		promise.catch((error) => {
			errorModal('Houve um erro ao publicar seu link')
			setDisable(false)
		})
	}

	return (
		<Create>
			<Avatar> <img src = {picture}/> </Avatar>
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
