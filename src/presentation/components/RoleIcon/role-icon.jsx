import React from 'react'
import PropTypes from 'prop-types'

import { Avatar, Tooltip } from '@material-ui/core'
import Art from '@material-ui/icons/Brush'
import Audio from '@material-ui/icons/Audiotrack'
import Code from '@material-ui/icons/Code'
import GameDesign from '@material-ui/icons/Extension'
import Writing from '@material-ui/icons/Create'

import { tooltip, icon, art, audio, code, gameDesign, writing } from './role-icon.module.scss'

const RoleIcon = ({skill}) => {
	let name
	let style = ''
	let component

	switch(skill) {
	case 'art':
		name = 'Artista'
		style = art
		component = <Art />
		break
	case 'audio':
		name = 'Audio Designer'
		style = audio
		component = <Audio />
		break
	case 'code':
		name = 'Programador'
		style = code
		component = <Code />
		break
	case 'game_design':
		name = 'Game Designer'
		style = gameDesign
		component = <GameDesign />
		break
	case 'writing':
		name = 'Escritor'
		style = writing
		component = <Writing />
		break
	default:
		style = ''
	} 

	return (
		<Tooltip title={name} className={tooltip}> 
			<Avatar className={icon + ' ' + style}>
				{component}
			</Avatar>
		</Tooltip>
	)
}

RoleIcon.propTypes = {
	skill: PropTypes.oneOf(['art', 'audio', 'code', 'game_design', 'writing'])
}

export default RoleIcon