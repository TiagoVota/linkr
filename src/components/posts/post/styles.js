import styled from 'styled-components'


const postWidth = '611px'
const profileSize = '50px'
const profileMobileSize = '40px'
const actionsWidth = `(${profileSize} + (2 * 18px))`
const actionsMobileWidth = `(${profileMobileSize} + (2 * 15px))`

const PostContainer = styled.div`
	background-color: #1E1E1E;

	border-radius: 16px;
	margin-bottom: 44px;
`

const Container = styled.div`
	width: ${postWidth};
	min-height: 200px;

	position: relative;

	display: flex;
	justify-content: start;
	margin-top: ${props => props.rePostId ? '80px' : '0px'};

	background: #171717;
	border-radius: 16px;

	@media(max-width: 650px) {
		width: 100vw;
		border-radius: 0px;
		margin-bottom: 16px;
	}
`

const ActionsContainer = styled.div`
	width: calc(${actionsWidth});
	padding-top: 17px;
	
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	
	@media(max-width: 650px) {
		width: calc(${actionsMobileWidth});
	}
`

const ProfileImg = styled.img`
	width: ${profileSize};
	height: ${profileSize};

	border-radius: 50%;

	:hover {
		cursor: pointer;
	}

	@media(max-width: 650px) {
		width: ${profileMobileSize};
		height: ${profileMobileSize};
	}
`

const PublicationContainer = styled.div`
	width: calc(${postWidth} - ${actionsWidth});
	padding: 19px 21px 20px 0px;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	@media(max-width: 650px) {
		width: calc(100vw - ${actionsMobileWidth});
		padding: 10px 18px 15px 0px;
	}
`

const UsernameText = styled.h2`
	width: 85%;
	margin-bottom: 10px;

	font-size: 19px;
	line-height: 23px;

	word-break: break-word;

	color: #FFFFFF;

	:hover {
		cursor: pointer;
	}

	@media(max-width: 650px) {
		font-size: 17px;
		line-height: 20px;
	}
`

const MessageText = styled.h3`
	margin-bottom: 12px;

	font-size: 17px;
	line-height: 20px;

	word-break: break-word;

	color: #B7B7B7;

	> span {
		font-weight: 700;
		color: #FFFFFF;

		:hover {
			cursor: pointer;

			color: #1877F2;
		}
	}

	@media(max-width: 650px) {
		font-size: 15px;
		line-height: 18px;
	}
`

const ContainerUpdate = styled.button`
	width: 30px;
	height: 25px;

	position: absolute;
	right: 50px;
	top: 15px;
	z-index: 1;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: inherit;
`

const EditText = styled.textarea`
	width: 100%;
	background-color:  ${props => props.active ? '#EFEFEF' : '#DEDEDE'};
	color: ${props => props.active ? '#000' : '#949494'};
	resize: none;
	box-sizing: border-box;
	border: none;
	border-radius: 5px;
	padding: 5px 10px;
	margin-bottom: 10px;
	font-size: 15px;
	font-family: 'Lato', sans-serif;
	${props => !props.active && 'pointer-events: none;'}
	::-webkit-scrollbar {
			display: none;
	}
`

export {
	Container,
	ActionsContainer,
	ProfileImg,
	PublicationContainer,
	UsernameText,
	MessageText,
	ContainerUpdate,
	EditText,
	PostContainer
}
