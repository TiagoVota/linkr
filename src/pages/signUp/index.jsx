import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { handleValidation } from '../../validations/handleValidation'
import { errorModal, successModal } from '../../factories/modalFactory'
import api from '../../services/api.auth'

import { signUpSchema } from '../../schemas/userSchema'

import Logo from '../../components/Logo/index'
import LogoMobile from '../../components/LogoMobile/index'
import { Button, Container, Form, FormContainer, Input, RedirectLink } from '../../components/FormComponents'


function SignUp(){
	const navigate = useNavigate()
	const [formData, setFormData] = useState({})
	const [isDisable, setIsDisable] = useState(false)

	function changeFormData(atribute, value){
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

		const promise = api.postSignUp(body)

		promise.then(() => {
			successModal('Cadastro realizado!')
			clearForm()

			navigate('/')
		})
		
		promise.catch(({ request: { status }}) => handleFailLogin(status))
	}

	function handleFailLogin(status){
		const msgStatus = {
			409: 'E-mail já cadastrado!',
			422: 'Campo(s) inválido(s)!',
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com o servidor 🥺'

		errorModal(msgToSend)
	}

	function clearForm(){
		setFormData({})
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
						type='text'
						onChange={({ target: { value }}) => changeFormData('password', value)}
						value={formData.password}
						isDisable={isDisable}
						required
					/>

					<Input
						id='Nome'
						placeholder='username'
						type='text'
						onChange={({ target: { value }}) => changeFormData('name', value)}
						value={formData.name}
						isDisable={isDisable}
						required
					/>

					<Input
						id='URL'
						placeholder='picture url'
						type='text'
						onChange={({ target: { value }}) => changeFormData('repeatPassword', value)}
						value={formData.repeatPassword}
						isDisable={isDisable}
						required
					/>

					<Button type='submit' isDisable={isDisable}>
						Sign Up
					</Button>
				</Form>

				<RedirectLink to='/'>
					Switch back to log in
				</RedirectLink>
			</FormContainer>

		</Container>
	)
}

export default SignUp
