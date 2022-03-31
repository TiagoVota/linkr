import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'

function createComment(token, body, postId) {
	return axios.post(`${BASE_URL}/posts/${postId}/comments`, body, makeConfig(token))
}

function getComments(token, postId) {
	return axios.get(`${BASE_URL}/posts/${postId}/comments`, makeConfig(token))
}

const api = {
	createComment,
	getComments
}
export default api
