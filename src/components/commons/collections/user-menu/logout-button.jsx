import React from 'react'
import PropTypes from 'prop-types'
import { MenuItem } from '@material-ui/core'
import { logout } from 'services/axios/auth-api-calls/users'
import { useUserContext } from 'contexts/UserContext'

const LogoutButton = ({ onClose }) => {
	const { setName } = useUserContext()

	function onHandleClick() {
		logout()
		setName(null)
		onClose()
	}

	return (
		<MenuItem key='logout' onClick={onHandleClick}>Sair</MenuItem>
	)
}

LogoutButton.propTypes = {
	onClose: PropTypes.func.isRequired
}

export default LogoutButton
