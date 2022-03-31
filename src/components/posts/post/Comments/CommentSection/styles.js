import styled from 'styled-components'

const Container = styled.div`
	display: ${props => props.showComments ? 'flex' : 'none'};
	flex-direction: column;
	gap: 10px;

	padding-top: 13px;
	width: 611px;
`

const CommentsList = styled.div`
	max-height: 170px;
	width: 100%;

	overflow: scroll;

	::-webkit-scrollbar {
		display: none;
	}
`

const Comment = styled.div`
	width: 90%;
	
	padding: 8px 0;
	word-break: break-word;
	margin: 0 auto;
	border-bottom: 1px solid #353535;

	display: flex;
	align-items: center;
	gap: 18px;
`

const Picture = styled.img`
	width: 39px;
	height: 39px;
	border-radius: 304px;
`

const Username = styled.p`
	font-family: 'Lato';
	font-weight: 700;
	font-size: 14px;
	line-height: 17px;
	color: #F3F3F3;
`

const Message = styled.p`
	font-family: 'Lato';
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #ACACAC;
`

const NewCommentContainer = styled.div`
	width: 100%;
	height: 39px;
	
	background: #252525;

 border-radius: 8px;

	display: flex;
	align-items: center;
	justify-content: space-around;
`

const NewComment = styled.textarea`
 all:unset;
	box-sizing: border-box;
	
	width: 90%;
	word-break: break-word;
	
	font-family: 'Lato';
	font-style: italic;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #ACACAC;
	
	::-webkit-scrollbar {
		display: none;
	}
`

const CommentFrom = styled.span`
	font-family: 'Lato';
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #565656;
`
export {
	Container,
	Comment,
	CommentsList,
	Picture,
	Username,
	Message,
	NewCommentContainer,
	NewComment,
	CommentFrom
}