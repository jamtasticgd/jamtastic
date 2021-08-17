import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'

import { useField } from '@unform/core'

import { TextField, InputAdornment, IconButton } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const TextInput = ({ name, label, type }) => {
	const [visibility, setVisibility] = useState(false)
	const inputRef = useRef()

	const { fieldName, defaultValue, registerField, error, clearError } = useField(name)

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef,
			getValue: ref => {
				return ref.current.value
			},
			setValue: (ref, value) => {
				ref.current.value = value
			},
			clearValue: ref => {
				ref.current.value = ''
			}
		})
	}, [fieldName, registerField])

	return (
		<TextField 
			size="small" 
			variant="filled" 
			type={visibility ? 'text' : type} 
			id={fieldName}
			label={label} 
			error={error}
			helperText={error}
			onFocus={clearError}
			defaultValue={defaultValue}
			color="secondary"
			InputLabelProps={{ shrink: true }}
			InputProps={{
				startAdornment: type === 'telegram' && <InputAdornment position="start">@</InputAdornment>,
				endAdornment: type === 'password' && (
					<InputAdornment position="end">
						<IconButton aria-label="alterar visibilidade da senha" onClick={() => setVisibility(!visibility)}>
							{visibility ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				)
			}}
			inputProps={{
				ref: inputRef
			}}
		/>
	)
}

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['text', 'email', 'password', 'telegram']).isRequired
}

export default TextInput