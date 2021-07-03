import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Dialog } from '@material-ui/core'
import LoginForm from './forms/login'

const AuthForms = ({ open, onClose }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState()
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const [telegram, setTelegram] = useState('')
  
	return (
		<Dialog open={open} onClose={onClose}>
			<LoginForm />
		</Dialog>
	)
}

AuthForms.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired
}

export default AuthForms