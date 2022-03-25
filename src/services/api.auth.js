import axios from 'axios'

import BASE_URL from './baseUrl'

function login(body) {
	return axios.post(`${BASE_URL}/`, body)
}

const api = {
	login
}

export default api