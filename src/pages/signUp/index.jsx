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
				<Label htmlFor='Nome'>Nome:</Label>
				<Input
					id='Nome'
					placeholder='Ex: Meu Lindo Nome'
					type='text'
					onChange={({ target: { value }}) => changeFormData('name', value)}
					value={formData.name}
					required
				/>

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
					type='text'
					onChange={({ target: { value }}) => changeFormData('password', value)}
					value={formData.password}
					required
				/>

				<Label htmlFor='Confirme sua senha'>Confirme sua senha:</Label>
				<Input
					id='Confirme sua senha'
					placeholder='Ex: Senha!123'
					type='text'
					onChange={({ target: { value }}) => changeFormData('repeatPassword', value)}
					value={formData.repeatPassword}
					required
				/>

				<Button type='submit'>
					Cadastrar
				</Button>
			</Form>

			<Link to='/auth/login'>
				<RedirectP>
					Já tem uma conta? Entre agora!
				</RedirectP>
			</Link>
		</Container>
	)
}


export default SignUp


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
