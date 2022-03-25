import axios from 'axios'

import BASE_URL from './baseUrl'

function createPost(body, config) {
	return axios.post(`${BASE_URL}/posts`, body, config)
}

const api = {
	createPost
}

export default api