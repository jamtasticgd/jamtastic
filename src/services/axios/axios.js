import axios from 'axios'
import { persistSessionToken } from './auth-api-calls/users'

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL
})

instance.interceptors.request.use((config) => {
	if (sessionStorage.getItem('access-token') != undefined) {
		config.headers['access-token'] = sessionStorage.getItem('access-token')
		config.headers['uid'] = sessionStorage.getItem('uid')
		config.headers['client'] = sessionStorage.getItem('client')
	}

	return config
})

instance.interceptors.response.use((response) => {
	persistSessionToken(sessionStorage, response.headers)

	return response
}, (error) => {
	persistSessionToken(sessionStorage, error.response.headers)

	return Promise.reject(error)
}
)

export default instance
