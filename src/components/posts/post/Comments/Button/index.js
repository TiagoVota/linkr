import { IoChatbubblesOutline } from 'react-icons/io5'
import styled from 'styled-components'

function CommentAction({ showComments, setShowComments, numberOfComments }) {

	function handleComment() {
		setShowComments(!showComments)
	}

	return (
		<ContainerButton>
			<IoChatbubblesOutline size='26px' onClick={handleComment} />

			<p>{numberOfComments} comments</p>
		</ContainerButton>
	)
}

export default CommentAction

const ContainerButton = styled.button`
	width: 100%;
	height: 45px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	font-size: 11px;
	line-height: 13px;
	color: #FFFFFF;

	background-color: inherit;

	:hover {
		filter: none;
	}

  @media(max-width: 650){
    font-size: 9px;
  }
`