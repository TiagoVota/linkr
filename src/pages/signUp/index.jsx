import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { handleValidation } from '../../validations/handleValidation'
import { errorModal, successModal } from '../../factories/modalFactory'
import { postSignUp } from '../../services/api.auth'

import { signUpSchema } from '../../schemas/userSchema'

import { Form, Input, Button, RedirectP } from './styles'
import Container from '../../components/Container'
import Logo from '../../components/Logo'


function SignUp() {
	const navigate = useNavigate()
	const [formData, setFormData] = useState({})

	function changeFormData(atribute, value) {
		const newFormData = { ...formData }
		newFormData[atribute] = value

		setFormData(newFormData)
	}

	function handleSubmit(event) {
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

				navigate('/login')
			}).catch(({ request: { status }}) => handleFailLogin(status))
	}

	function handleFailLogin(status) {
		const msgStatus = {
			409: 'E-mail já cadastrado!',
			422: 'Campo(s) inválido(s)!',
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com o servidor 🥺'

		errorModal(msgToSend)
	}

	function clearForm() { setFormData({}) }


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
