import React from 'react'

import { Paper } from '@material-ui/core'
import { container } from './board.module.scss'

import teamCardMock from '../../../data/mockedValues/team-card-mock'

const Board = () => {
	console.log(teamCardMock)

	return (
		<div className={container}>
			<Paper>Crie seu time:</Paper>
			<Paper>Ou procure por um pela sua habilidade!</Paper>
		</div>
	)
}

export default Board