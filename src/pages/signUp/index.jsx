import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { handleValidation } from '../../validations/handleValidation'
import { errorModal, successModal } from '../../factories/modalFactory'
import api from '../../services/api.auth'

import signUpSchema from '../../schemas/userSchema'

import Logo from '../../components/logo'
import { Button, Container, Form, FormContainer, Input, RedirectLink } from '../../components/formComponents'


function SignUp(){
	const navigate = useNavigate()
	const [formData, setFormData] = useState({})
	const [disable, setDisable] = useState(false)

	function changeFormData(atribute, value){
		const newFormData = { ...formData }
		newFormData[atribute] = value

		setFormData(newFormData)
	}

	function handleSubmit(event) {
		event.preventDefault()
		setDisable(true)
		
		const body = {
			...formData,
			email: formData.email?.toLowerCase(),
		}
    
		const { isValid, error } = handleValidation(body, signUpSchema)
		if (!isValid){
			setDisable(false)
			return errorModal(error)
		}

		const promise = api.createUser(body)

		promise.then(() => {
			successModal('Sign up performed!')
			clearForm()

			navigate('/')
		})
		
		promise.catch((error) => {
			errorModal(error.response.data)
			setDisable(false)
		})
	}

	function clearForm(){
		setFormData({})
	} 

	return (
		<Container>
			<Logo />

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

					<Input
						id='Nome'
						placeholder='username'
						type='text'
						onChange={({ target: { value }}) => changeFormData('username', value)}
						value={formData.username}
						isDisable={disable}
						required
					/>

					<Input
						id='URL'
						placeholder='picture url'
						type='text'
						onChange={({ target: { value }}) => changeFormData('picture', value)}
						value={formData.picture}
						isDisable={disable}
						required
					/>

					<Button type='submit' isDisable={disable}>
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
