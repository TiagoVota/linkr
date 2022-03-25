import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'

import api from '../../services/api.auth'
import { handleValidation } from '../../validations/handleValidation'
import { errorModal, successModal } from '../../factories/modalFactory'

import authSchema from '../../schemas/authSchema'

import Logo from '../../components/Logo'
import LogoMobile from '../../components/LogoMobile'

import {
	Button,
	Container,
	Form,
	FormContainer,
	Input,
	RedirectLink
} from '../../components/FormComponents'


function Login() {
	const { auth: { token }, login } = useAuth()
	const navigate = useNavigate()
	const [formData, setFormData] = useState({})
	const [disable, setDisable] = useState(false)

	useEffect(() => {
		if (token) navigate('/timeline')
	}, [token])

	function changeFormData (atribute, value) {
		const newFormData = { ...formData }
		newFormData[atribute] = value

		setFormData(newFormData)
	}

	function handleSubmit(event) {
		event.preventDefault()
		setDisable(true)

		const body = {
			email: formData.email?.toLowerCase(),
			password: formData.password
		}
		
		const { isValid, error } = handleValidation(body, authSchema)
		if (!isValid) return errorModal(error)

		const promise = api.login(body)

		promise.then((response) => {
			successModal('Login realizado!')
			login(response.data)
			navigate('/timeline')
		})
		
		promise.catch((error) => {
			errorModal(error.response.data)
			setDisable(false)
		})
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
						isDisable={disable}
						required
					/>

					<Input
						id='Senha'
						placeholder='password'
						type='password'
						onChange={({ target: { value }}) => changeFormData('password', value)}
						value={formData.password}
						isDisable={disable}
						required
					/>

					<Button type='submit' isDisable={disable}>
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
