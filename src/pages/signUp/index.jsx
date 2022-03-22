import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { handleValidation } from '../../validations/handleValidation'
import { errorModal, successModal } from '../../factories/modalFactory'
import { postSignUp } from '../../services/api.auth'

import { signUpSchema } from '../../schemas/userSchema'

import Container from '../../components/Container'
import Logo from '../../components/Logo'


const SignUp = () => {
	const navigate = useNavigate()
	const [formData, setFormData] = useState({})

	const changeFormData = (atribute, value) => {
		const newFormData = { ...formData }
		newFormData[atribute] = value

		setFormData(newFormData)
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		const body = {
			...formData,
			email: formData.email?.toLowerCase(),
		}
		
		const { isValid, error } = handleValidation(body, signUpSchema)
		if (!isValid) return errorModal(error)

		postSignUp(body)
			.then(() => {
				successModal('Cadastro realizado!')
				clearForm()

				navigate('/auth/login')
			}).catch(({ request: { status }}) => handleFailLogin(status))
	}

	const handleFailLogin = (status) => {
		const msgStatus = {
			409: 'E-mail já cadastrado!',
			422: 'Campo(s) inválido(s)!',
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com o servidor 🥺'

		errorModal(msgToSend)
	}

	const clearForm = () => setFormData({})


	return (
		<Container>
			<Logo />

			<Form onSubmit={handleSubmit}>
				<Input
					id='E-mail'
					placeholder='e-mail'
					type='email'
					onChange={({ target: { value }}) => changeFormData('email', value)}
					value={formData.email}
					required
				/>
				
				<Input
					id='Senha'
					placeholder='password'
					type='text'
					onChange={({ target: { value }}) => changeFormData('password', value)}
					value={formData.password}
					required
				/>

				<Input
					id='Nome'
					placeholder='username'
					type='text'
					onChange={({ target: { value }}) => changeFormData('name', value)}
					value={formData.name}
					required
				/>

				<Input
					id='URL'
					placeholder='picture url'
					type='text'
					onChange={({ target: { value }}) => changeFormData('repeatPassword', value)}
					value={formData.repeatPassword}
					required
				/>

				<Button type='submit'>
					Sign Up
				</Button>
			</Form>

			<Link to='/'>
				<RedirectP>
					Switch back to log in
				</RedirectP>
			</Link>
		</Container>
	)
}


export default SignUp


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
