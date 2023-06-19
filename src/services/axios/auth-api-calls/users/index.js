import axios from '../../axios'
import { toast } from 'react-toastify'
import { RegisterSuccess } from 'services/toastify/messages'
import { getStorage } from 'helpers/storage'

export async function registerUser(data) {
	axios.post('users', data)
		.then(() =>
			toast.success(RegisterSuccess)
		)
		.catch(error => {
			toast.error(error.response.data.errors[0])
		})
}

export async function login(data, rememberLogin, successCallback = () => { }) {
	const storage = rememberLogin ? localStorage : sessionStorage
	storage.setItem('rememberLogin', rememberLogin)

	axios.post('users/sign_in', data)
		.then(response => {
			persistUserData(storage, response.data.data)
			successCallback()
		})
		.catch(error => {
			toast.error(error.response.data.errors[0])
		})
}

export async function logout() {
	axios.delete('users/sign_out').then(() => {
		getStorage().clear()

		toast.success('Você se desconectou da sua conta.')
	}
	)
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

export async function persistUserData(storage, userData) {
	storage.setItem('name', userData.name)
}

export async function persistSessionToken(storage, headers) {
	if (headers['access-token']) {
		storage.setItem('access-token', headers['access-token'])
		storage.setItem('uid', headers['uid'])
		storage.setItem('client', headers['client'])
	}
}
