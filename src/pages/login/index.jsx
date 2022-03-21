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
				<Label htmlFor='E-mail'>E-mail:</Label>
				<Input
					id='E-mail'
					placeholder='Ex: meulindoemail@email.com'
					type='email'
					onChange={({ target: { value }}) => changeFormData('email', value)}
					value={formData.email}
					required
				/>

				<Label htmlFor='Senha'>Senha:</Label>
				<Input
					id='Senha'
					placeholder='Ex: Senha!123'
					type='password'
					onChange={({ target: { value }}) => changeFormData('password', value)}
					value={formData.password}
					required
				/>

				<Button type='submit'>
					Entrar
				</Button>
			</Form>

			<Link to='/auth/sign-up'>
				<RedirectP>
					Primeira vez? Cadastre-se!
				</RedirectP>
			</Link>
		</Container>
	)
}


export default Login


const Form = styled.form`
	margin: 25px 0;
`

const Label = styled.label`
	margin-left: 6%;

	font-size: 20px;
	line-height: 24px;

	color: #FFFFFF;
`

const Input = styled.input`
	width: 88%;
	height: 58px;
	margin: 0 6vw 4px;
	padding-left: 13px;

	font-size: 20px;

	border-radius: 5px;
	border-width: 0px;

	background: #FFFFFF;
`

const Button = styled.button`
	width: 88%;
	height: 46px;
	margin: 15px 6vw;

	font-weight: bold;
	font-size: 20px;
	line-height: 23px;

	border-radius: 5px;
`

const RedirectP = styled.p`
	font-weight: bold;
	font-size: 15px;
	line-height: 18px;

	color: #FFFFFF;
`
