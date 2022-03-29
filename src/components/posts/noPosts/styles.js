import styled from 'styled-components'


const Container = styled.div`
	margin-top: 30px;
	width: ${props => props.userPage ? '100vh' : '100%'};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	font-weight: 700;
	font-size: 25px;
	line-height: 29px;

	color: #FFFFFF;

	svg {
		margin-bottom: 30px;
	}

	@media(max-width: 650px) {
		width: 100vw;
	}
`


export {
	Container,
}
