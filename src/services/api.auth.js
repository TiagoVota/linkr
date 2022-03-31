import axios from 'axios'

import BASE_URL from './baseUrl'

function createUser(body) {
	return axios.post(`${BASE_URL}/sign-up`, body)
}

function login(body) {
	return axios.post(`${BASE_URL}/login`, body)
}

const api = {
	createUser,
	login,
}

export default api
