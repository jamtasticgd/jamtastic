import axios from '../axios'
import { toast } from 'react-toastify'

export async function getTeams() {
	return axios.get('teams')
		.then(response => response.data)
		.catch(error => {
			toast.error(error.response.data.errors[0])
		})
}

export async function getTeam(id) {
	return axios.get(`teams/${id}`)
		.then(response => response.data)
		.catch(error => {
			toast.error(error.response.data.errors[0])
		})
}

export async function getSkills() {
	return axios.get('skills')
		.then(response => response.data)
		.then(skills => skills.map((skill) => { return skill.code }))
}
