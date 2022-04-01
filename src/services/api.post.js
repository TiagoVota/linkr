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

function existingRepost(postId, token) {
	return axios.get(`${POST_URL}/repost/${postId}`, makeConfig(token))
}

function createRepost(body, token) {
	return axios.post(`${POST_URL}/repost`, body, makeConfig(token))
}

function deleteRepost(postId, token) {
	return axios.delete(`${POST_URL}/repost/${postId}`, makeConfig(token))
}

function numberRepost(postId, token) {
	return axios.get(`${POST_URL}/repost/count/${postId}`, makeConfig(token))
}

const api = {
	getTimelinePosts,
	createPost,
	sendDeletePostRequest,
	updatePost,
	existingRepost,
	createRepost,
	deleteRepost,
	numberRepost
}


export default api
