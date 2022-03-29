import { IoPaperPlaneOutline } from 'react-icons/io5'
import {
	Container,
	Comment,
	Picture,
	Username,
	Message,
	NewCommentContainer,
	NewComment
} from './styles'

function CommentSection({ showComments }) {
	const picture = 'https://cdns-images.dzcdn.net/images/artist/58327a7b9ad26d0d4f948f7fc36c6c8b/500x500.jpg'
	const comments = []

	return (
		<Container showComments={showComments}>
			{comments.map(comment => (
				<Comment key={comment.id}>
					<Picture src={comment.picture} alt="" />
					<div>
						<Username>{comment.name}</Username>
						<Message>{comment.comment}</Message>
					</div>
				</Comment>
			))}
			<Comment>
				<Picture src={picture} alt="" />

				<NewCommentContainer>
					<NewComment placeholder='write a comment...' rows='1' cols='23' />
					<IoPaperPlaneOutline size='20px' color='#fff' cursor='pointer' />
				</NewCommentContainer>

			</Comment>
		</Container>
	)
}

export default CommentSection
