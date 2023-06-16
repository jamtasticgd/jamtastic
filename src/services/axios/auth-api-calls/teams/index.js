import axios from '../../axios'
import { toast } from 'react-toastify'

export async function joinTeam(team) {
	return axios.post('teams/' + team.id + '/enrollments')
		.then(response => {
			if (team.approve_new_members) {
				toast.success('A sua entrada foi enviada para aprovação do administrador do time.')
			} else {
				toast.success('Você agora faz parte desse time.')
			}

			return response
		})
		.catch(error => {
			toast.error(error.response.data.errors[0])
		})
}
