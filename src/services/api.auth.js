import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'

const postLogin = ({ email, password }) => {
	const body = { email, password }

	return axios.post(`${BASE_URL}/`, body)
}


function postSignUp(body) {
	return axios.post(`${BASE_URL}/sign-up`, body)
}

const api = {
	postLogin,
	postSignUp,

}

export default api
