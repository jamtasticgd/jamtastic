import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Button } from '@material-ui/core'

import TextInput from 'components/commons/atomics/text-input/text-input'

import { registerUser } from 'services/axios/auth-api-calls'

import styles from '../forms.module.scss'

const RegisterForm = ({ goToLogin, onClose }) => {
	const formRef = useRef(null)

	async function onSubmit(data) {
		try {
			const validate = Yup.object().shape({
				name: Yup.string().matches(/^[a-zA-Z ]+$/, 'O nome deve conter apenas letras').required('Nome obrigatório'),
				email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
				telegram: Yup.string().min(5, 'A senha deve possuir no mínimo 5  caracteres').matches(/^[a-zA-Z0-9_]+$/, 'O username deve conter apenas letras, números ou underline'),
				password: Yup.string().min(6, 'A senha deve possuir no mínimo 6  caracteres').required('Senha obrigatória'),
				password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'As senhas não batem')
			})

			await validate.validate(data, {
				abortEarly: false
			})

			await registerUser(data)
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
		<div className={styles.container}>
			<h1>Seja bem vindo!</h1>
			<Form ref={formRef} className={styles.form} onSubmit={onSubmit}>
				<TextInput label="Nome" type="text" name="name"  />
				<TextInput label="Email" type="text" name="email"  />
				<TextInput label="Telegram" type="telegram" name="telegram"  />
				<TextInput label="Senha" type="password" name="password"  />
				<TextInput label="Confirme sua senha" type="password" name="password_confirmation" />
				<Button variant="contained" color="secondary" type="submit">Registrar</Button>
			</Form>
			<Button variant="text" color="secondary" size="small" onClick={goToLogin}>Ou Voltar ao login</Button>
		</div>
	)
}

RegisterForm.propTypes = {
	goToLogin: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired
}

export default RegisterForm
