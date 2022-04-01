import axios from 'axios'

import BASE_URL from './baseUrl'

import { makeConfig } from '../helpers/configHelper'


const HASHTAG_URL = `${BASE_URL}/hashtags`

function insertHashtags(body, config) {
	console.log(body)
	return axios.post(`${HASHTAG_URL}`, body, config)
}

function getHashtags(token) {
	return axios.get(`${HASHTAG_URL}`, makeConfig(token))
}

function getHashtag(offset, hashtagId, token) {
	return axios.get(`${HASHTAG_URL}/${hashtagId}?offset=${offset}`, makeConfig(token))
}

const api = {
	insertHashtags,
	getHashtags,
	getHashtag
}

export default api
