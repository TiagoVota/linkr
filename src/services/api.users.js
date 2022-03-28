import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'


const USER_URL = `${BASE_URL}/users`

const getUsers = ({ token, userName }) => {
	return axios.get(`${USER_URL}?userName=${userName}`, makeConfig(token))
}


export {
	getUsers,
}
