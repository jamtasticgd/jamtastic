import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button, Card, Avatar, Tooltip } from '@material-ui/core'
import RoleIconList from '../role-icon-list/role-icon-list'

import styles from './team-card.module.scss'
import { useArrayHandler } from 'hooks/use-array-handler'
import TeamDetails from 'components/pages/team/team-details/team-details'
import { joinTeam } from 'services/axios/auth-api-calls/teams'
import { getTeam } from 'services/axios/public-api-calls'

const TeamCard = ({ data }) => {
	const [team, setTeam] = useState(data)
	const [openModal, setOpenModal] = useState(false)

	function onCloseModal() {
		setOpenModal(false)
	}

	function onJoinTeamClick() {
		joinTeam(team).then(() => {
			getTeam(team.id).then((teamData) => {
				setTeam(teamData)
			})
		})
	}

	return (
		<>
			<Card className={styles.container}>
				<h2>{team.name}</h2>
				<p>{team.description}</p>
				<h3>Membros:</h3>
				<div className={styles.membersRow}>
					{team.members.map(member =>
						<Tooltip key={member.user.name} title={member.user.name}>
							<Avatar src={member.user.name} alt={member.user.name} />
						</Tooltip>
					)}
				</div>
				<h3>Procurando:</h3>
				<div className={styles.lastLine}>
					<RoleIconList roles={useArrayHandler(team.needed_skills)} />
					<div className={styles.btnContainer}>
						<Button variant="contained" color="secondary" onClick={() => setOpenModal(!openModal)}>Detalhes</Button>
					</div>
				</div>
			</Card>
			<TeamDetails data={team} open={openModal} onClose={onCloseModal} onJoinTeam={onJoinTeamClick} />
		</>
	)
}

TeamCard.propTypes = {
	data: PropTypes.object
}

export default TeamCard
