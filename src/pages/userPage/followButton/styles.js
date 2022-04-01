import styled from 'styled-components'


const ButtonContainer = styled.button`
	width: 112px;
	height: 31px;

	position: absolute;
	right:0;

	font-weight: 700;
	font-size: 14px;
	line-height: 17px;

	border-radius: 5px;

	background: ${p => p.isFollowing ? '#FFFFFF' : '#1877F2'};
	color: ${p => p.isFollowing ? '#1877F2' : '#FFFFFF'};

	opacity: ${p => p.isDisable ? 0.7 : 1};

	cursor: ${p => p.isDisable ? 'wait' : 'pointer'};

	@media(max-width: 650px) {
		left: 15px;
		bottom: 10px;
	}
`


export {
	ButtonContainer,
}
