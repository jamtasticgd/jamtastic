import React from 'react'
import  PropTypes from 'prop-types'

import RoleIcon from '../role-icon/role-icon'

const IconList = ({ roles }) => {
	const list = roles.map((role) => {
		let key = Object.keys(role)[0]
		let value = role[Object.keys(role)]
		if(value) {
			return <RoleIcon key={key} skill={key} value={role[key]} />
		}
	})

	return list
}

IconList.propTypes = {
	roles: PropTypes.arrayOf(PropTypes.object)
}

export default IconList