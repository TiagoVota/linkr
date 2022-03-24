import axios from 'axios'

import BASE_URL from './baseUrl'

function insertHashtags(body, config) {
	return axios.post(`${BASE_URL}/hashtags`, body, config)
}

const api = {
	insertHashtags
}

export default api