import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'


const USER_URL = `${BASE_URL}/users`

function getUsers({ token, userName }) {
	return axios.get(`${USER_URL}?userName=${userName}`, makeConfig(token))
}

function getUserPosts(id, token) {
	return axios.get(`${USER_URL}/${id}`, makeConfig(token))
}


const api = {
	getUsers,
	getUserPosts,
}

export default api
