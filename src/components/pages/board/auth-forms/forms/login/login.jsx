import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core'

import { container, form, revalidationButtons } from '../forms.module.scss'
import TextInput from 'components/commons/atomics/text-input/text-input'

const LoginForm = ({ goToRegister }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [rememberLogin, setRememberLogin] = useState(false)

	return (
		<div className={container}>
			<h1>Mas antes faça seu login!</h1>
			<form className={form}>
				<TextInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
				<TextInput label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
				<FormControlLabel label="Lembre-se de mim" control={
					<Checkbox checked={rememberLogin} onChange={() => setRememberLogin(!rememberLogin)} />
				}/>
				<Button variant="contained" color="secondary" type="submit">Entrar</Button>
			</form>
			<div className={revalidationButtons}>
				<Button variant="text" color="secondary" size="small">Esqueci minha senha</Button>
				<Button variant="text" color="secondary" size="small">Confirmar meu cadastro</Button>
			</div>
			<Button variant="text" color="secondary" onClick={goToRegister}>Ou registre-se!</Button>
		</div>
	)
}

LoginForm.propTypes = {
	goToRegister: PropTypes.func.isRequired
}

export default LoginForm