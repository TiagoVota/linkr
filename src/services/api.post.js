import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'


const POST_URL = `${BASE_URL}/posts`

const getTimelinePosts = ({ token }) => {
	return axios.get(`${POST_URL}/timeline`, makeConfig(token))
}

function createPost(body, config) {
	return axios.post(`${POST_URL}`, body, config)
}

function sendDeletePostRequest (id, token) {
	return axios.delete(`${POST_URL}/${id}`, makeConfig(token))
}

function updatePost(postId, token, message) {
	return axios.put(`${POST_URL}/${postId}`, {message}, makeConfig(token))
}


const api = {
	getTimelinePosts,
	createPost,
	sendDeletePostRequest,
	updatePost,
}


export default api
