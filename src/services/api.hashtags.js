import axios from 'axios'

import BASE_URL from './baseUrl'

import { makeConfig } from '../helpers/configHelper'


const HASHTAG_URL = `${BASE_URL}/hashtags`

function insertHashtags(body, config) {
	return axios.post(`${HASHTAG_URL}`, body, config)
}

function getHashtags(token) {
	return axios.get(`${HASHTAG_URL}`, makeConfig(token))
}

function getHashtag(hashtagId, token) {
	return axios.get(`${HASHTAG_URL}/${hashtagId}`, makeConfig(token))
}

const api = {
	insertHashtags,
	getHashtags,
	getHashtag
}

export default api
