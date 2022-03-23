import { useState } from 'react'
import { Container, CreatePost, Link, Message, Form, Button } from './styles'


function Timeline() {
	const [link, setLink] = useState('')
	const [message, setmessage] = useState('')

	return (
		<Container>
			<CreatePost>
				<div>What are you going to share today?</div>
				<Form onSubmit={() => {}}>
					<Link 
						type="url" 
						value={link} 
						onChange={(e) => setLink(e.target.value)} 
						placeholder='http://...'>
					</Link>
					<Message 
						type="text" 
						value={message}
						onChange={(e) => setmessage(e.target.value)} 
						placeholder='Awesome article about #javascript'>
					</Message>
					<Button type='submit' >Publish</Button>
				</Form>
			</CreatePost>
		</Container>
	)
}


export default Timeline
