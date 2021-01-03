import React from 'react'

import { container, board } from './board.module.scss'

import teamCardMock from '../../../data/mocked-values/team-card-mock'
import TeamCard from '../../components/team-card/team-card'

const Board = () => {
	return (
		<div className={container}>
			<div className={board}>
				{teamCardMock.map((data, index) => <TeamCard key={data.title + '-' + index} data={data} />)}
			</div>
		</div>
	)
}

export default Board