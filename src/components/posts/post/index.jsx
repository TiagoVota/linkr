import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TiPencil } from 'react-icons/ti'
import ReactHashtag from '@mdnm/react-hashtag'

import useAuth from '../../../hooks/useAuth'
import useReloadPosts from '../../../hooks/useReloadPosts'

import api from '../../../services/api.post'
import { removeHashtag } from '../../../utils/strManipulate'

import LinkContent from './linkContent'
import DeleteContainer from './Delete'
import LikeAction from './likeAction'
import CommentAction from './Comments/Button'
import CommentSection from './Comments/CommentSection'

import {
	ActionsContainer,
	Container,
	ContainerUpdate,
	EditText,
	MessageText,
	ProfileImg,
	PublicationContainer,
	UsernameText,
	PostContainer
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
	const [showComments, setShowComments] = useState(false)
	const [numberOfComments, setNumberOfComments] = useState(0)

	const { auth: { authDetails: { id: myUserId }, token } } = useAuth()
	const { warnReloadPosts } = useReloadPosts()

	function goToUserPost() { navigate(`/user/${userId}`) }

	function handleHashtagClick(hashtag) {
		navigate(`/hashtag/${removeHashtag(hashtag)}`)
	}

	function submitEditPost(newMessage) {
		api.updatePost(postId, token, newMessage)
			.then(() => {
				setDisabled(false)
				setInputIsOpen(false)
				setAble(true)
				warnReloadPosts()
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
		<PostContainer>
			<Container>
				<ActionsContainer>
					<ProfileImg
						src={picture}
						alt={`${username}'s profile picture`}
						onClick={goToUserPost}
					/>

					<LikeAction likes={likes} postId={postId} />
					<CommentAction 
						showComments={showComments} 
						setShowComments={setShowComments}
						numberOfComments={numberOfComments}	
					/>
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
			<CommentSection 
				showComments={showComments} 
				postId={postId}
				setNumberOfComments={setNumberOfComments}
			/>
		</PostContainer>
	)
}


export default Post
