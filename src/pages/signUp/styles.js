import styled from 'styled-components'


const Form = styled.form`
	margin-top: 80px;
	margin-bottom: 18px;
`

const Input = styled.input`
	width: 88%;
	height: 58px;
	margin: 0 6vw 10px;
	padding-left: 13px;

	font-size: 20px;

	border-radius: 5px;
	border-width: 0px;

	background: #FFFFFF;
`

const Button = styled.button`
	width: 88%;
	height: 46px;
	margin: 0px 6vw;

	
	border-radius: 5px;
	background: #1877F2;
	
	font-weight: bold;
	font-family: 'Oswald', sans-serif;
	font-weight: 700;
	font-size: 22px;
	line-height: 33px;
`

const RedirectP = styled.p`
	font-family: 'Lato', sans-serif;
	font-weight: 400;
	font-size: 17px;
	line-height: 20px;
	text-decoration-line: underline;

	color: #FFFFFF;
`


export {
	Form,	
	Input,
	Button,
	RedirectP,
}
