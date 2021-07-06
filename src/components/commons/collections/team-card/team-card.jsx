import React from 'react'
import PropTypes from 'prop-types'

import { Button, Card, Avatar } from '@material-ui/core'
import RoleIconList from '../role-icon-list/role-icon-list'

import { container, membersRow, btnContainer, lastLine } from './team-card.module.scss'

const TeamCard = ({data}) => {
	return (
		<Card className={container}>
			<h2>{data.title}</h2>
			<p>{data.description}</p>
			<h3>Membros:</h3>
			<div className={membersRow}>
				{data.members.map(member => <Avatar key={member} src={member} alt={member} /> )}
			</div>
			<h3>Procurando:</h3>
			<div className={lastLine}>
				<RoleIconList roles={data.searching} />		
				<div className={btnContainer}>
					<Button variant="contained" color="secondary">Detalhes</Button>
				</div>
			</div>
		</Card>
	)
}

TeamCard.propTypes= {
	data: PropTypes.object
}

export default TeamCard
