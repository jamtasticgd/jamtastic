import axios from 'axios'
import { persistSessionToken } from './auth-api-calls/users'
import { getStorage } from 'helpers/storage'

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL
})

instance.interceptors.request.use((config) => {
	const storage = getStorage()

	if (storage.getItem('access-token') != undefined) {
		config.headers['access-token'] = storage.getItem('access-token')
		config.headers['uid'] = storage.getItem('uid')
		config.headers['client'] = storage.getItem('client')
	}

	return config
})

instance.interceptors.response.use((response) => {
	persistSessionToken(getStorage(), response.headers)

	return response
}, (error) => {
	persistSessionToken(getStorage(), error.response.headers)

	return Promise.reject(error)
}
)

export default instance
