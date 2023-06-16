import React from 'react'
import PropTypes from 'prop-types'
import RoleIconList from 'components/commons/collections/role-icon-list/role-icon-list'
import { useArrayHandler } from 'hooks/use-array-handler'

import PersonAddIcon from '@material-ui/icons/PersonAdd'
import { Button, Dialog, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import styles from './team-details.module.scss'
import { joinTeam } from 'services/axios/auth-api-calls/teams'

const TeamDetails = ({ data, open, onClose }) => {
	async function onJoinTeamClick() {
		joinTeam(data)
	}

	return (
		<Dialog open={open} onClose={onClose}>
			<div className={styles.container}>
				<h2>{data.name}</h2>
				<p>{data.description}</p>
				<h2>Membros</h2>

				<List>
					{[...data.members].map(member =>
						<ListItem key={member.user.name}>
							<ListItemAvatar>
								<Avatar src={member.user.name} alt={member.user.name} />
							</ListItemAvatar>
							<ListItemText primary={member.user.name} />
						</ListItem>
					)}
				</List>
				<h2>Procurando</h2>
				<List>
					<ListItem>
						<RoleIconList roles={useArrayHandler(data.needed_skills)} />
					</ListItem>
				</List>
				<div className={styles.btnContainer}>
					<Button variant="contained" color="secondary" startIcon={<PersonAddIcon />} onClick={onJoinTeamClick}>
						Participar do time
					</Button>
				</div>
			</div>
		</Dialog>
	)
}

TeamDetails.propTypes = {
	data: PropTypes.object.isRequired,
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired
}

export default TeamDetails
