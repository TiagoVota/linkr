import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'

function postLogin(body) {
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
