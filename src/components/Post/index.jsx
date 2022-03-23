import { useNavigate } from 'react-router-dom'

import LinkContent from './LinkContent'

import {
	ActionsContainer,
	Container,
	MessageText,
	ProfileImg,
	PublicationContainer,
	UsernameText
} from './styles'


const Post = ({ postInfo }) => {
	const {
		userId,
		username,
		picture,
		message
	} = postInfo
	const navigate = useNavigate()

	function goToUserPost() { navigate(`/users/${userId}`) }

	return (
		<Container>
			<ActionsContainer>
				<ProfileImg
					src={picture}
					alt={`${username}'s profile picture`}
					onClick={goToUserPost}
				/>
			</ActionsContainer>

			<PublicationContainer>
				<UsernameText onClick={goToUserPost}>{username}</UsernameText>

				<MessageText>{message}</MessageText>

				<LinkContent postInfo={postInfo}/>
			</PublicationContainer>
		</Container>
	)
}


export default Post
