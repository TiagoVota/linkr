import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import useAuth from '../../hooks/useAuth'
import { handleValidation } from '../../validations/handleValidation'
import { errorModal, successModal } from '../../factories/modalFactory'
import { postLogin } from '../../services/api.auth'

import { loginSchema } from '../../schemas/userSchema'

import Container from '../../components/Container'
import Logo from '../../components/Logo'


const Login = () => {
	const { auth, login } = useAuth()
	const navigate = useNavigate()
	const [formData, setFormData] = useState({})

	useEffect(() => {
		if (auth & auth?.token) goHomepage()
	}, [])

	const changeFormData = (atribute, value) => {
		const newFormData = { ...formData }
		newFormData[atribute] = value

		setFormData(newFormData)
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		const body = {
			email: formData.email?.toLowerCase(),
			password: formData.password
		}
		
		const {isValid, error} = handleValidation(body, loginSchema)
		if (!isValid) return errorModal(error)

		postLogin(body)
			.then(({ data: userInfo }) => {
				successModal('Login realizado!')
				login(userInfo)
				goHomepage()
			}).catch(({ request: { status }}) => handleFailLogin(status))
	}

	const handleFailLogin = (status) => {
		const msgStatus = {
			401: 'Senha incorreta!',
			404: 'E-mail não encontrado!',
			422: 'Campo(s) inválido(s)!',
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com o servidor 🥺'

		errorModal(msgToSend)
	}

	const goHomepage = () => {
		setFormData({})
		navigate('/')
	}


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
					type='password'
					onChange={({ target: { value }}) => changeFormData('password', value)}
					value={formData.password}
					required
				/>

				<Button type='submit'>
					Log In
				</Button>
			</Form>

			<Link to='/sign-up'>
				<RedirectP>
					First time? Create an account!
				</RedirectP>
			</Link>
		</Container>
	)
}


export default Login


const Form = styled.form`
	margin: 25px 0;
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
