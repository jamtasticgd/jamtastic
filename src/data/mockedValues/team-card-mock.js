import faker from 'faker/locale/pt_BR'
import roleList from './role-list'

const teamCardMocks = [...Array(faker.random.number(20))].map(() => {
	return 	{
		title: faker.company.companyName(),
		description: faker.lorem.sentence(faker.random.number(20)),
		members: [...Array(faker.random.number(5))].map(() => {
			return {
				name: faker.name.firstName(),
				role: roleList[faker.random.number(4)]
			}
		}),        
	}
})

export default teamCardMocks