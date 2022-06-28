import { useState } from 'react'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import useAuth from '../../../../../hooks/useAuth'
import {
	Container,
	Comment,
	CommentsList,
	Picture,
	Username,
	Message,
	NewCommentContainer,
	NewComment,
	CommentFrom
} from './styles'
import api from '../../../../../services/api.comments'
import { useEffect } from 'react'

function CommentSection({ showComments, postId, setNumberOfComments, last }) {
	const { auth: { authDetails: { picture, id }, token } } = useAuth()
	const [comments, setComments] = useState([])
	const [newComment, setNewComment] = useState('')
	const [loadComments, setLoadComments] = useState(false)

	useEffect(() => {
		const promise = api.getComments(token, postId, id)

		promise.then(response => {
			setComments(response.data)
			setNumberOfComments(response.data.length)
		})
	}, [loadComments])

	function handleComment() {
		if (newComment !== '') {
			const comment = {
				text: newComment,
				authorId: id
			}

			const promise = api.createComment(token, comment, postId)
			promise.then(() => {
				setLoadComments(!loadComments)
				setNewComment('')
			})
			promise.catch((error) => {
				console.log(error.response)
			})
		}
	}

	return (
		<Container showComments={showComments}>
			<CommentsList>
				{comments.map(comment => (
					<Comment key={comment.id}>
						<Picture src={comment.picture} alt={Comment.username} />
						<div>
							<Username>
								{comment.username}
								<CommentFrom>{comment.authorId === id && ' • post\'s author'}</CommentFrom>
								<CommentFrom>{comment.isFollowing && ' • following'}</CommentFrom>
							</Username>
							<Message>{comment.text}</Message>
						</div>
					</Comment>
				))}
			</CommentsList>
			<Comment>
				<Picture src={picture} alt="" />

				<NewCommentContainer>
					<NewComment
						type='text'
						placeholder='write a comment...'
						rows='1'
						onChange={(e) => setNewComment(e.target.value)}
						value={newComment}
						onFocus={() => setLoadComments(!loadComments)}
						required
					/>
					<IoPaperPlaneOutline
						size='20px' color='#fff' cursor='pointer'
						onClick={handleComment}
					/>
				</NewCommentContainer>

			</Comment>
		</Container >
	)
}

export default CommentSection
