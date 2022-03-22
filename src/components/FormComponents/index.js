import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;

	background-color: #333333;
`
const FormContainer = styled.div`
	width: 40%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 15px;

	@media(max-width: 700px) {
		width: 100%;
		margin-top: 175px;
	}
`

const Form = styled.form`
	width: 80%;

	display: flex;
	flex-direction: column;
	gap: 13px;
`

const Input = styled.input`
	width: 100%;
	height: 58px;

	padding-left: 13px;

	font-size: 20px;

	border-radius: 5px;
	border-width: 0px;

	background: #FFFFFF;

 background-color: ${p => p.isDisable ? '#bababa' : '#FFFFFF'};
	pointer-events: ${p => p.isDisable ? 'none' : 'all'};


`

const Button = styled.button`
	width: 100%;
	height: 46px;

	border-radius: 5px;
	background: #1877F2;
	
	font-weight: bold;
	font-family: 'Oswald', sans-serif;
	font-weight: 700;
	font-size: 22px;
	line-height: 33px;

	opacity: ${p => p.isDisable ? 0.7 : 1};

	cursor: ${p => p.isDisable ? 'not-allowed' : 'pointer'};
`

const RedirectLink = styled(Link)`
	font-family: 'Lato', sans-serif;
	font-weight: 400;
	font-size: 17px;
	line-height: 20px;
	text-decoration-line: underline;

	color: #FFFFFF;
`

export {
	Button,
	Container,
	Form,
	FormContainer,
	Input,
	RedirectLink
} 