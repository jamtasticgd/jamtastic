import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button, Card, Avatar, Tooltip } from '@material-ui/core'
import RoleIconList from '../role-icon-list/role-icon-list'

import styles from './team-card.module.scss'
import { useArrayHandler } from 'hooks/use-array-handler'
import TeamDetails from 'components/pages/team/team-details/team-details'

const TeamCard = ({ data }) => {
	const [openModal, setOpenModal] = useState(false)

	function onCloseModal() {
		setOpenModal(false)
	}

	return (
		<>
			<Card className={styles.container}>
				<h2>{data.name}</h2>
				<p>{data.description}</p>
				<h3>Membros:</h3>
				<div className={styles.membersRow}>
					{data.members.map(member =>
						<Tooltip key={member.user.name} title={member.user.name}>
							<Avatar src={member.user.name} alt={member.user.name} />
						</Tooltip>
					)}
				</div>
				<h3>Procurando:</h3>
				<div className={styles.lastLine}>
					<RoleIconList roles={useArrayHandler(data.needed_skills)} />
					<div className={styles.btnContainer}>
						<Button variant="contained" color="secondary" onClick={() => setOpenModal(!openModal)}>Detalhes</Button>
					</div>
				</div>
			</Card>
			<TeamDetails data={data} open={openModal} onClose={onCloseModal} />
		</>
	)
}

TeamCard.propTypes = {
	data: PropTypes.object
}

export default TeamCard
