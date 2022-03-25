import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'

const getTimelinePosts = ({ token }) => {
	return axios.get(`${BASE_URL}/timeline`, makeConfig(token))
}

export {
	getTimelinePosts,
}