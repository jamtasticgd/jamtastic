import axios from '../../axios'
import { toast } from 'react-toastify'
import { RegisterSuccess } from 'services/toastify/messages'

export async function registerUser(data) {
	axios.post('users', data)
		.then(() =>
			toast.success(RegisterSuccess)
		)
		.catch(error => {
			toast.error(error.response.data.errors[0])
		})
}

export async function login(data, rememberLogin, successCallback = () => {}) {
	axios.post('users/sign_in', data)
		.then(response => {
			const storage = rememberLogin ? localStorage : sessionStorage

			persistUserData(storage, response.data.data['name'])
			persistSessionToken(sessionStorage, response.headers)
			successCallback()
		})
		.catch(error => {
			toast.error(error.response.data.errors[0])
		})
}

export async function resendConfirmation(data) {
	axios.post('users/confirmation', data)
		.then(response => {
			toast.success(response.data.message)
		})
		.catch(error => {
			toast.error(error.response.data.errors[0])
		})
}

export async function persistUserData(storage, userFirstName) {
	storage.setItem('name', userFirstName)
}

export async function persistSessionToken(storage, headers) {
	if (headers['access-token']) {
		storage.setItem('access-token', headers['access-token'])
		storage.setItem('uid', headers['uid'])
		storage.setItem('client', headers['client'])
	}
}
