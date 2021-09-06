import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Button, Checkbox, FormControlLabel } from '@material-ui/core'

import TextInput from 'components/commons/atomics/text-input/text-input'

import { login } from 'services/axios/auth-api-calls'

import { container, form, revalidationButtons } from '../forms.module.scss'
import { useUserContext } from 'contexts/UserContext'
import { getStateFromStorage } from 'helpers/storage'

const LoginForm = ({ goToRegister, goToConfirmation, onClose }) => {
	const formRef = useRef(null)
	const { setName } = useUserContext()
	const [rememberLogin, setRememberLogin] = useState(false)

	async function onSubmit(data) {
		try {
			const validate = Yup.object().shape({
				email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
				password: Yup.string().min(6, 'A senha deve possuir no mínimo 6  caracteres').required('Senha obrigatória')
			})
	
			await validate.validate(data, {
				abortEarly: false
			})

			await login(data, rememberLogin, () => setName(getStateFromStorage('name')))
			onClose()
			
		} catch (error) {
			if(error instanceof Yup.ValidationError) {
				const errorMessages = {}

				error.inner.forEach(err => {
					errorMessages[err.path] = err.message
				})
				
				formRef.current.setErrors(errorMessages)
			}
		}
	}

	return (
		<div className={container}>
			<h1>Mas antes faça seu login!</h1>
			<Form ref={formRef} className={form} onSubmit={onSubmit}>
				<TextInput label="Email" type="text" name="email"  />
				<TextInput label="Senha" type="password" name="password"  />
				<FormControlLabel label="Lembre-se de mim" control={
					<Checkbox checked={rememberLogin} onChange={() => setRememberLogin(!rememberLogin)} />
				}/>
				<Button variant="contained" color="secondary" type="submit">Entrar</Button>
			</Form>
			<div className={revalidationButtons}>
				<Button variant="text" color="secondary" size="small">Esqueci minha senha</Button>
				<Button 
					variant="text" 
					color="secondary" 
					size="small"
					onClick={goToConfirmation}
				>
						Confirmar meu cadastro
				</Button>
			</div>
			<Button variant="text" color="secondary" onClick={goToRegister}>Ou registre-se!</Button>
		</div>
	)
}

LoginForm.propTypes = {
	goToRegister: PropTypes.func.isRequired,
	goToConfirmation: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired
}

export default LoginForm