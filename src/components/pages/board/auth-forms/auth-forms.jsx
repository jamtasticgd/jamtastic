import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Dialog } from '@material-ui/core'

import LoginForm from './forms/login/Login'
import RegisterForm from './forms/register/Register'
import ConfirmationForm from './forms/confirmation/Confirmation'

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

	function goToConfirmation() {
		setStep('confirmation')
	}

	function renderForm(){
		switch(step) {
		case 'confirmation':
			return <ConfirmationForm goToLogin={goToLogin} onClose={onClose} />
		case 'register':
			return <RegisterForm goToLogin={goToLogin} onClose={onClose} />
		default:
			return <LoginForm goToRegister={goToRegister} goToConfirmation={goToConfirmation} onClose={onClose} />
		}
	}
  
	return (
		<Dialog open={open} onClose={onClose}>
			{renderForm()}
		</Dialog>
	)
}

AuthForms.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired
}

export default AuthForms