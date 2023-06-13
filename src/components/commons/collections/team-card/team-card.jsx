import React from 'react'
import PropTypes from 'prop-types'

import { Button, Card, Avatar, Tooltip } from '@material-ui/core'
import RoleIconList from '../role-icon-list/role-icon-list'

import { container, membersRow, btnContainer, lastLine } from './team-card.module.scss'
import { useArrayHandler } from 'hooks/use-array-handler'

const TeamCard = ({ data }) => {
	return (
		<Card className={container}>
			<h2>{data.name}</h2>
			<p>{data.description}</p>
			<h3>Membros:</h3>
			<div className={membersRow}>
				{[...data.members, data.owner].map(member =>
					<Tooltip key={member.name} title={member.name}>
						<Avatar src={member.name} alt={member.name} />
 					</Tooltip>
				)}
			</div>
			<h3>Procurando:</h3>
			<div className={lastLine}>
				<RoleIconList roles={useArrayHandler(data.needed_skills)} />
				<div className={btnContainer}>
					<Button variant="contained" color="secondary">Detalhes</Button>
				</div>
			</div>
		</Card>
	)
}

TeamCard.propTypes = {
	data: PropTypes.object
}

export default TeamCard
