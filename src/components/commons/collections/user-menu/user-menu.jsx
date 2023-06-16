import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from '@material-ui/core'
import LogoutButton from './logout-button'

const UserMenu = ({anchorEl, loggedIn, onClose}) => {
	const resources = []

	if (loggedIn)
		resources.push(<LogoutButton onClose={onClose} />)

	return (
		<Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={onClose}>
			{resources}
		</Menu>
	)
}

UserMenu.propTypes = {
	anchorEl: PropTypes.object,
	loggedIn: PropTypes.boolean,
	onClose: PropTypes.func.isRequired
}

export default UserMenu
