import React from 'react'
import PropTypes from 'prop-types'

import { TextField } from '@material-ui/core'

import { container, form } from './login.module.scss'

const LoginForm = () => {
	return (
		<div className={container}>
			<h1>Mas antes faça seu login!</h1>
			<form className={form}>
				<TextField placeholder="Email"></TextField>
				<TextField placeholder="Senha"></TextField>
        
			</form>
		</div>
	)
}

LoginForm.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired
}

export default LoginForm