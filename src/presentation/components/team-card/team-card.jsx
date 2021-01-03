import React from 'react'
import PropTypes from 'prop-types'

import { Card, Avatar, Button } from '@material-ui/core'
import RoleIconList from '../role-icon-list/role-icon-list'

import { container, membersRow, rolesRow, btnContainer, button, lastLine } from './team-card.module.scss'

const TeamCard = ({data}) => {
	return <Card className={container}>
		<h2>{data.title}</h2>
		<p>{data.description}</p>
		<h3>Membros:</h3>
		<div className={membersRow}>
			{data.members.map(member => <Avatar key={member} src={member} alt={member} /> )}
		</div>
		<h3>Procurando:</h3>
		<div className={lastLine}>
			<div className={rolesRow}>
				<RoleIconList roles={data.searching} />		
			</div>
			<div className={btnContainer}>
				<Button size="small" variant="contained" className={button}>Detalhes</Button>
			</div>
		</div>
	</Card>
}

TeamCard.propTypes= {
	data: PropTypes.object
}

export default TeamCard
