import React from 'react'
import PropTypes from 'prop-types'

import { Avatar, Badge, Tooltip } from '@material-ui/core'
import BrushIcon from '@material-ui/icons/Brush'
import AudiotrackIcon from '@material-ui/icons/Audiotrack'
import CodeIcon from '@material-ui/icons/Code'
import ExtensionIcon from '@material-ui/icons/Extension'
import CreateIcon from '@material-ui/icons/Create'

import styles from './role-icon.module.scss'

const RoleIcon = ({skill, active=true }) => {
	let name
	let style = ''
	let component

	switch(skill) {
	case 'art':
		name = 'Artista'
		style = styles.art
		component = <BrushIcon />
		break
	case 'audio':
		name = 'Audio Designer'
		style = styles.audio
		component = <AudiotrackIcon />
		break
	case 'code':
		name = 'Programador'
		style = styles.code
		component = <CodeIcon />
		break
	case 'game_design':
		name = 'Game Designer'
		style = styles.gameDesign
		component = <ExtensionIcon />
		break
	case 'writing':
		name = 'Escritor'
		style = styles.writing
		component = <CreateIcon />
		break
	default:
		style = ''
	}

	style = active ? style : ''

	return (
		//eslint-disable-next-line
		<Tooltip title={name} className={styles.tooltip} children={
			<Badge anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} color='secondary' overlap='circular'>
				<Avatar className={styles.icon + ' ' + style}>
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
