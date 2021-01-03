import React from 'react'
import PropTypes from 'prop-types'

import { Card, Button } from '@material-ui/core'
import RoleIconList from '../../components/role-icon-list/role-icon-list'
import { container, button } from './team-manager.module.scss'

const TeamManager = ({ roles }) => (
	<Card className={container}>
		<Button size="small" variant="contained" className={button} >Crie seu time</Button>
		<h3>Ou procure um para exercitar suas habilidades:</h3>
		<RoleIconList clickable={true} roles={roles} />
	</Card>
)

TeamManager.propTypes = {
	roles: PropTypes.object
}

export default TeamManager

