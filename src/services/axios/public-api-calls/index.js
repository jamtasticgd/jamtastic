import axios from '../axios'
import { toast } from 'react-toastify'

export async function getTeams() {
	return axios.get('teams')
		.then(response => response.data)
		.catch(error => {
			toast.error(error.response.data.errors[0])
		})
}
