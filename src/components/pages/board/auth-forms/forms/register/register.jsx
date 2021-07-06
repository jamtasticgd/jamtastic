import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button } from '@material-ui/core'
import TextInput from 'components/commons/atomics/text-input/text-input'

import { container, form } from '../forms.module.scss'

const RegisterForm = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [telegram, setTelegram] = useState('')
	const [password, setPassword] = useState('')
	const [passConfirm, setPassConfirm] = useState('')

	return (
		<div className={container}>
			<h1>Seja bem vindo!</h1>
			<form className={form}>
				<TextInput label="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)}  />
				<TextInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
				<TextInput label="Telegram" type="telegram" value={telegram} onChange={(e) => setTelegram(e.target.value)}  />
				<TextInput label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
				<TextInput label="Confirme sua senha" type="password" value={passConfirm} onChange={(e) => setPassConfirm(e.target.value)}  />
				<Button variant="contained" color="secondary" type="submit">Registrar</Button>
			</form>
		</div>
	)
}

export default RegisterForm