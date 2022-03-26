import { useNavigate } from 'react-router-dom'
import ReactHashtag from '@mdnm/react-hashtag'

import LinkContent from './LinkContent'
import DeleteContainer from './Delete'

import {
	ActionsContainer,
	Container,
	MessageText,
	ProfileImg,
	PublicationContainer,
	UsernameText
} from './styles'
import { removeHashtag } from '../../../utils/strManipulate'


const Post = ({ postInfo }) => {
	const {
		userId,
		postId,
		username,
		picture,
		message
	} = postInfo
	const navigate = useNavigate()

	function goToUserPost() { navigate(`/user/${userId}`) }

	function handleHashtagClick(hashtag) {
		navigate(`/hashtag/${removeHashtag(hashtag)}`)
	}

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
				<UsernameText onClick={goToUserPost}>
					{username}
				</UsernameText>

				<DeleteContainer postId={postId}/>

				<MessageText>
					<ReactHashtag onHashtagClick={handleHashtagClick}>
						{message}
					</ReactHashtag>
				</MessageText>

				<LinkContent postInfo={postInfo}/>
			</PublicationContainer>
		</Container>
	)
}


export default Post
