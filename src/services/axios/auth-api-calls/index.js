import axios from '../axios'
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
			storage.setItem('name', response.data.data['name'])
			storage.setItem('token', response.headers['access-token'])
			storage.setItem('uid', response.headers['uid'])
			storage.setItem('client', response.headers['client'])
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