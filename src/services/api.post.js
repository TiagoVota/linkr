import axios from 'axios'

import BASE_URL from './baseUrl'
import { makeConfig } from '../helpers/configHelper'

function createPost(body, config) {
	return axios.post(`${BASE_URL}/posts`, body, config)
}

function sendDeletePostRequest (id, token) {
	return axios.delete(`${BASE_URL}/posts/${id}`, makeConfig(token))
}

const api = {
	createPost,
	sendDeletePostRequest
}

export default api