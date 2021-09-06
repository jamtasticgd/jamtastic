import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Button } from '@material-ui/core'

import TextInput from 'components/commons/atomics/text-input/text-input'


import { container, form } from '../forms.module.scss'

const ConfirmationForm = ({ goToLogin, onClose }) => {
	const formRef = useRef(null)

	async function onSubmit(data) {
		try {
			const validate = Yup.object().shape({
				email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
			})
	
			await validate.validate(data, {
				abortEarly: false
			})

			
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
			<h1>Insira seu email!</h1>
			<Form ref={formRef} className={form} onSubmit={onSubmit}>
				<TextInput label="Email" type="text" name="email"  />
				<Button variant="contained" color="secondary" type="submit">Enviar</Button>
			</Form>
			<Button variant="text" color="secondary" onClick={goToLogin}>Ou faça seu login!</Button>
		</div>
	)
}

ConfirmationForm.propTypes = {
	goToLogin: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired
}

export default ConfirmationForm