import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'


const FOLLOW_URL = `${BASE_URL}/follow`

function insertFollow({ token, userId }) {
	const body = { followId: userId }

	return axios.post(`${FOLLOW_URL}`, body, makeConfig(token))
}

function deleteFollow({ token, userId }) {
	return axios.delete(`${FOLLOW_URL}/${userId}`, makeConfig(token))
}


const api = {
	insertFollow,
	deleteFollow,
}


export default api
