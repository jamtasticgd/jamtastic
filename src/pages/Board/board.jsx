import { getTeams } from 'services/axios/public-api-calls'
import React, { useEffect, useState } from 'react'
import styles from './board.module.scss'
import TeamManager from 'components/pages/board/team-manager/team-manager'
import TeamCard from 'components/commons/collections/team-card/team-card'
import { getSkills } from 'services/axios/public-api-calls'

import { useArrayHandler } from 'hooks/use-array-handler'

const roles = await getSkills()

const Board = () => {
	const [teams, setTeams] = useState([])

	useEffect(() => {
		getTeams()
			.then((teamsData) => {
				setTeams(teamsData)
			})
	}, [])

	return (
		<div className={styles.container}>
			<TeamManager roles={useArrayHandler(roles)} />
			<div className={styles.board}>
				{teams.map((card) => {
					return <TeamCard key={card.id} data={card} />
				})}
			</div>
		</div>
	)
}

export default Board
