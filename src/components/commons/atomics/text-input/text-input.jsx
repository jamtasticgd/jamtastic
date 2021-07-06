import React from 'react'
import PropTypes from 'prop-types'

import { TextField, InputAdornment, IconButton } from '@material-ui/core'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const TextInput = ({ label, type, value, onChange }) => {
	const [visibility, setVisibility] = useState(false)

	return (
		<TextField 
			size="small" 
			variant="filled" 
			type={visibility ? 'text' : type} 
			label={label} 
			value={value} 
			onChange={onChange}
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
		/>
	)
}

TextInput.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['text', 'email', 'password', 'telegram']).isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
}

export default TextInput