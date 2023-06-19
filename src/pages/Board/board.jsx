import { getTeams } from 'services/axios/public-api-calls'
import React, { useEffect, useState } from 'react'
import styles from './board.module.scss'
import TeamManager from 'components/pages/board/team-manager/team-manager'
import TeamCard from 'components/commons/collections/team-card/team-card'

import { useArrayHandler } from 'hooks/use-array-handler'

const Board = () => {
	const [teams, setTeams] = useState([])
	const roles = useArrayHandler(['art', 'audio', 'code', 'game_design', 'writing'])

	useEffect(() => {
		getTeams()
			.then((teamsData) => {
				setTeams(teamsData)
			})
	}, [])

	return (
		<div className={styles.container}>
			<TeamManager roles={roles} />
			<div className={styles.board}>
				{teams.map((card) => {
					return <TeamCard key={card.id} data={card} />
				})}
			</div>
		</div>
	)
}

export default Board
