import React from 'react'
import  PropTypes from 'prop-types'

import RoleIcon from '../role-icon/role-icon'
import { IconButton } from '@material-ui/core'

import { container, button } from './role-icon-list.module.scss'

import roleList from '../../../data/mocked-values/role-list-mock'

const RoleIconList = ({ roles, clickable }) => {
	let list
    
	if(clickable) {
		list = roleList.map((role) => 
			<IconButton key={role} size='small' className={button} onClick={() => roles.toggleValue(role)}>
				<RoleIcon key={role} skill={role} clickable={true} active={roles.value.indexOf(role) !== -1} />
			</IconButton>
		)

	}
	else {
		list = Object.keys(roles).map((role) => {
			let value = roles[role]
			if(value) {
				return <RoleIcon key={role} skill={role} value={value} />
			}
		})
	}

	return (
		<div className={container}>{list}</div>
	)
}

RoleIconList.propTypes = {
	roles: PropTypes.object,
	clickable: PropTypes.bool
}

export default RoleIconList