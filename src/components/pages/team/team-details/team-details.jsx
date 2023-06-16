import React from 'react'
import PropTypes from 'prop-types'
import RoleIconList from 'components/commons/collections/role-icon-list/role-icon-list'
import { useArrayHandler } from 'hooks/use-array-handler'

import PersonAddIcon from '@material-ui/icons/PersonAdd'
import { Button, Dialog, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import styles from './team-details.module.scss'

const TeamDetails = ({ data, open, onClose }) => {
	return (
		<Dialog open={open} onClose={onClose}>
			<div className={styles.container}>
				<h2>{data.name}</h2>
				<p>{data.description}</p>
				<h2>Membros</h2>

				<List>
					{[...data.members, data.owner].map(member =>
						<ListItem key={member.name}>
							<ListItemAvatar>
								<Avatar src={member.name} alt={member.name} />
							</ListItemAvatar>
							<ListItemText primary={member.name} />
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
					<Button variant="contained" color="secondary" startIcon={<PersonAddIcon />}>
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
