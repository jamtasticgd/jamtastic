import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Dialog } from '@material-ui/core'

import LoginForm from './forms/login/login'
import RegisterForm from './forms/register/register'

const AuthForms = ({ open, onClose }) => {
	const [step, setStep] = useState('login')
	const [password, setPassword] = useState()
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const [telegram, setTelegram] = useState('')

	useEffect(() => {
		if(open) {
			return setStep('login')
		}
	}, [open])

	function goToRegister() {
		setStep('register')
	}
  
	return (
		<Dialog open={open} onClose={onClose}>
			{step === 'login' ?
				<LoginForm goToRegister={goToRegister} />
				:
				<RegisterForm />
			}
		</Dialog>
	)
}

AuthForms.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired
}

export default AuthForms