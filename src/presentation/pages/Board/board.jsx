import React from 'react'

import { Paper } from '@material-ui/core'
import { container, board } from './board.module.scss'

import teamCardMock from '../../../data/mocked-values/team-card-mock'
import TeamCard from '../../components/team-card/team-card'

const Board = () => {
	return (
		<div className={container}>
			<Paper>Crie seu time:</Paper>
			<Paper>Ou procure por um pela sua habilidade!</Paper>
			<div className={board}>
				{teamCardMock.map(data => <TeamCard key={data.title} data={data} />)}
			</div>
		</div>
	)
}

export default Board