import axios from '../axios'

export async function registerUser(data) {
	axios.post('users', data)
		.then(response => console.log(response))
		.catch(error => console.log(error))
}

export async function login(data, rememberLogin) {
	axios.post('users/sign_in', data)
		.then(response => {
			const storage = rememberLogin ? localStorage : sessionStorage
			storage.setItem('token', response.headers['access-token'])
			storage.setItem('uid', response.headers['uid'])
			storage.setItem('client', response.headers['client'])
		})
		.catch(error => console.log(error))
}