import React from 'react'
import PropTypes from 'prop-types'

import { Avatar, Badge, Tooltip } from '@material-ui/core'
import Art from '@material-ui/icons/Brush'
import Audio from '@material-ui/icons/Audiotrack'
import Code from '@material-ui/icons/Code'
import GameDesign from '@material-ui/icons/Extension'
import Writing from '@material-ui/icons/Create'

import { tooltip, icon, art, audio, code, gameDesign, writing } from './role-icon.module.scss'

const RoleIcon = ({skill, active=true }) => {
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

	style = active ? style : ''

	return (
		//eslint-disable-next-line
		<Tooltip title={name} className={tooltip} children={
			<Badge anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} color='secondary' overlap='circle'>
				<Avatar className={icon + ' ' + style}>
					{component}
				</Avatar>
			</Badge>
		}>
		</Tooltip>
	)
}

RoleIcon.propTypes = {
	skill: PropTypes.oneOf(['art', 'audio', 'code', 'game_design', 'writing']),
	clickable: PropTypes.bool,
	active: PropTypes.bool
}

export default RoleIcon
