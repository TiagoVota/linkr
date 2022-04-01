import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'


const POST_URL = `${BASE_URL}/posts`

const getTimelinePosts = (offset, token ) => {
	return axios.get(`${POST_URL}/timeline?offset=${offset}`, makeConfig(token))
}

function createPost(body, token) {
	return axios.post(`${POST_URL}`, body, makeConfig(token))
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
