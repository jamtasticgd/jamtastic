import React from 'react'

import { container, board } from './board.module.scss'

import teamCardMock from 'data/mocked-values/team-card-mock'
import TeamManager from 'components/pages/board/team-manager/team-manager'
import TeamCard from 'components/commons/collections/team-card/team-card'


import { useArrayHandler } from 'hooks/use-array-handler'

const Board = () => {
	const roles = useArrayHandler(['art', 'audio', 'code', 'game_design', 'writing'])

	return (
		<div className={container}>
			<TeamManager roles={roles} />
			<div className={board}>
				{teamCardMock.map((card, index) => {
					let renderCard = false
					roles.value.forEach(role => {
						if(card.searching[role] > 0) renderCard = true
					})
					if(renderCard) return <TeamCard key={card.title + '-' + index} data={card} />
				})}
			</div>
		</div>
	)
}

export default Board