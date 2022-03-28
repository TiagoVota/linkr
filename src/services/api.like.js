import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'


const LIKE_URL = `${BASE_URL}/likes`

function insertLike({ token, postId }) {
	const body = { postId }

	return axios.post(`${LIKE_URL}/like`, body, makeConfig(token))
}

function deleteLike({ token, postId }) {
	return axios.delete(`${LIKE_URL}/dislike/${postId}`, makeConfig(token))
}


const api = {
	insertLike,
	deleteLike,
}


export default api
