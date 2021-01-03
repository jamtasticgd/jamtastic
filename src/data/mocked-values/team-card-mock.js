import faker from 'faker/locale/pt_BR'
import roleList from './role-list'

const teamCardMocks = [...Array(faker.random.number(20))].map(() => {
	return 	{
		title: faker.company.companyName(),
		description: faker.lorem.sentence(30, 5),
		members: [...Array(faker.random.number({min: 1, max: 5}))].map(() => faker.name.firstName()),
		searching: roleList.map(role => { return {[role]: faker.random.number(4)} })
	}
})

export default teamCardMocks