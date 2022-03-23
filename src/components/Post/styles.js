import styled from 'styled-components'


const postWidth = '611px'
const profileSize = '50px'
const profileMobileSize = '40px'
const actionsWidth = `(${profileSize} + (2 * 18px))`
const actionsMobileWidth = `(${profileMobileSize} + (2 * 15px))`

const Container = styled.div`
	width: ${postWidth};
	min-height: 200px;
	margin-bottom: 29px;

	display: flex;
	justify-content: start;

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
	margin-bottom: 10px;

	font-size: 19px;
	line-height: 23px;

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

	color: #B7B7B7;

	@media(max-width: 650px) {
		font-size: 15px;
		line-height: 18px;
	}
`


export {
	Container,
	ActionsContainer,
	ProfileImg,
	PublicationContainer,
	UsernameText,
	MessageText,
}
