import axios from 'axios'

import BASE_URL from './baseUrl'
import { makeConfig } from '../helpers/configHelper'

function createPost(body, config) {
	return axios.post(`${BASE_URL}/posts`, body, config)
}

function sendDeletePostRequest (id, token) {
	return axios.delete(`${BASE_URL}/posts/${id}`, makeConfig(token))
}

function updatePost(postId, token, message) {
	return axios.put(`${BASE_URL}/posts/${postId}`, {message}, makeConfig(token))
}

const api = {
	createPost,
	sendDeletePostRequest,
	updatePost
}

export default api