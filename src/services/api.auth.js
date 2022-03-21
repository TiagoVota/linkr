import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'


const AUTH_URL = `${BASE_URL}/auth`

const postLogin = ({ email, password }) => {
	const body = { email, password }

	return axios.post(`${AUTH_URL}/login`, body)
}


const postSignUp = ({ name, email, password, repeatPassword }) => {
	const body = { name, email, password, repeatPassword }

	return axios.post(`${AUTH_URL}/sign-up`, body)
}


export {
	postLogin,
	postSignUp,
}
