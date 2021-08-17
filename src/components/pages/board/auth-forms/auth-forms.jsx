import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Dialog } from '@material-ui/core'

import LoginForm from './forms/login/login'
import RegisterForm from './forms/register/register'

const AuthForms = ({ open, onClose }) => {
	const [step, setStep] = useState('login')

	useEffect(() => {
		if(open) {
			return setStep('login')
		}
	}, [open])

	function goToRegister() {
		setStep('register')
	}

	function goToLogin() {
		setStep('login')
	}
  
	return (
		<Dialog open={open} onClose={onClose}>
			{step === 'login' ?
				<LoginForm goToRegister={goToRegister} />
				:
				<RegisterForm goToLogin={goToLogin} />
			}
		</Dialog>
	)
}

AuthForms.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired
}

export default AuthForms