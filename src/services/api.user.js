import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'

function createUser(body) {
	return axios.post(`${BASE_URL}/sign-up`, body)
}

function getUserPosts(id, token) {
	return axios.get(`${BASE_URL}/user/${id}`, makeConfig(token))
}

const api = {
	createUser,
	getUserPosts
}

export default api