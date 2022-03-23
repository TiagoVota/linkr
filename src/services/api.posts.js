import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'


const AUTH_URL = `${BASE_URL}/posts`

const getTimelinePosts = ({ token }) => {
	return axios.get(`${AUTH_URL}`, makeConfig(token))
}


export {
	getTimelinePosts,
}
