import axios from 'axios'

export function getSkillsList() {
	axios.get('http://jamtastic.org/api/skills')
		.then(response => {
			console.log(response)
		})
		.catch(error => {
			console.log(error)
		})
}