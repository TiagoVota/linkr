import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TiPencil } from 'react-icons/ti'
import ReactHashtag from '@mdnm/react-hashtag'

import useAuth from '../../../hooks/useAuth'

import { removeHashtag } from '../../../utils/strManipulate'

import api from '../../../services/api.post'

import LinkContent from './LinkContent'
import DeleteContainer from './Delete'
import LikeAction from './likeAction'

import {
	ActionsContainer,
	Container,
	ContainerUpdate,
	EditText,
	MessageText,
	ProfileImg,
	PublicationContainer,
	UsernameText
} from './styles'


const Post = ({ postInfo }) => {
	const {
		userId,
		postId,
		username,
		picture,
		message,
		likes,
	} = postInfo
	const navigate = useNavigate()
	const [inputIsOpen, setInputIsOpen] = useState(false)
	const [newMessage, setNewMessage] = useState('')
	const [disabled, setDisabled] = useState(false)
	const [able, setAble] = useState(true)
	const { auth: { authDetails: { id: myUserId },  token } } = useAuth()

	function goToUserPost() { navigate(`/user/${userId}`) }

	function handleHashtagClick(hashtag) {
		navigate(`/hashtag/${removeHashtag(hashtag)}`)
	}

	function submitEditPost(newMessage) {
		api.updatePost(postId, token, newMessage)
			.then(() => {
				setTimeout(() => {
					setDisabled(false)
					setInputIsOpen(false)
					setAble(true)
					window.location.reload()
				}, 1500)
			})
	}

	function handleKey(e) {
		if(e.keyCode === 13) {
			setDisabled(true)
			setAble(!able)
			submitEditPost(newMessage)
		}
		if(e.keyCode === 27) {
			setDisabled(false)
			setAble(!able)
			setInputIsOpen(false)
		}
	}

	function openEditPost() {
		setInputIsOpen(!inputIsOpen)
		setNewMessage(message)
	}

	return (
		<Container>
			<ActionsContainer>
				<ProfileImg
					src={picture}
					alt={`${username}'s profile picture`}
					onClick={goToUserPost}
				/>
				
				<LikeAction likes={likes} postId={postId} />
			</ActionsContainer>

			<PublicationContainer>
				<UsernameText onClick={goToUserPost}>
					{username}
				</UsernameText>

				{	Boolean(myUserId !== userId)
					? <></>
					:	<>
						<DeleteContainer postId={postId}/>

						<ContainerUpdate>
							<TiPencil 
								onClick={() => openEditPost()}
								color={'#FFFFFF'}
								height='20px'
								width='20px'
								style={{cursor: 'pointer'}}
							/>
						</ContainerUpdate>
					</>
				}

				{inputIsOpen ? (
					<EditText
						autoFocus
						onFocus={(e) => e.currentTarget.select()}
						active={able}
						disabled={disabled}
						value={newMessage}
						onChange={(e) => setNewMessage(e.target.value)}
						onKeyDown={(e) => handleKey(e)}
					/>) : (
					<MessageText>
						<ReactHashtag onHashtagClick={handleHashtagClick}>
							{message}
						</ReactHashtag>
					</MessageText>
				)}

				<LinkContent postInfo={postInfo}/>
			</PublicationContainer>
		</Container>
	)
}


export default Post
