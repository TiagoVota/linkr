import axios from 'axios'

import BASE_URL from './baseUrl'

import { makeConfig } from '../helpers/configHelper'


function insertHashtags(body, config) {
	return axios.post(`${BASE_URL}/hashtags`, body, config)
}

function getHashtags(token) {
	return axios.get(`${BASE_URL}/hashtags`, makeConfig(token))
}
const api = {
	insertHashtags,
	getHashtags
}

export default api