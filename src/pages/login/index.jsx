import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import useAuth from '../../hooks/useAuth'
import { handleValidation } from '../../validations/handleValidation'
import { errorModal, successModal } from '../../factories/modalFactory'
import api from '../../services/api.auth'

import { loginSchema } from '../../schemas/userSchema'

import { Button, Container, Form, FormContainer, Input, RedirectLink } from '../../components/FormComponents'
import Logo from '../../components/Logo'
import LogoMobile from '../../components/LogoMobile'


const Login = () => {
	const { auth, login } = useAuth()
	const navigate = useNavigate()
	const [formData, setFormData] = useState({})
	const [isDisable, setIsDisable] = useState(false)

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

		api.postLogin(body)
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
			<LogoMobile/>

			<FormContainer>
				<Form onSubmit={handleSubmit}>
					<Input
						id='E-mail'
						placeholder='e-mail'
						type='email'
						onChange={({ target: { value }}) => changeFormData('email', value)}
						value={formData.email}
						isDisable={isDisable}
						required
					/>

					<Input
						id='Senha'
						placeholder='password'
						type='password'
						onChange={({ target: { value }}) => changeFormData('password', value)}
						value={formData.password}
						isDisable={isDisable}
						required
					/>

					<Button type='submit' isDisable={isDisable}>
						Log In
					</Button>
				</Form>

				<RedirectLink to='/sign-up' >
					First time? Create an account!
				</RedirectLink>
			</FormContainer>
		</Container>
	)
}


export default Login
