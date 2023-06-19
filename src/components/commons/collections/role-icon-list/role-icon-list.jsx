import React from 'react'
import  PropTypes from 'prop-types'

import { IconButton } from '@material-ui/core'

import RoleIcon from 'components/commons/atomics/role-icon/role-icon'

import styles from './role-icon-list.module.scss'
import { getSkills } from 'services/axios/public-api-calls'

const roleList = await getSkills()

const RoleIconList = ({ roles, clickable }) => {
	let list

	if(clickable) {
		list = roleList.map((role) =>
			<IconButton key={role} size='small' className={styles.button} onClick={() => roles.toggleValue(role)}>
				<RoleIcon key={role} skill={role} active={roles.value.indexOf(role) !== -1} />
			</IconButton>
		)

	}
	else {
		list = roles.value.map((role) => {
			return <RoleIcon key={role} skill={role} />
		})
	}

	return (
		<div className={styles.container}>{list}</div>
	)
}

RoleIconList.propTypes = {
	roles: PropTypes.object,
	clickable: PropTypes.bool
}

export default RoleIconList
