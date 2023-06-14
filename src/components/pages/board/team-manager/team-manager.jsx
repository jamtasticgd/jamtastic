import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button, Card } from '@material-ui/core'

import RoleIconList from 'components/commons/collections/role-icon-list/role-icon-list'

import styles from './team-manager.module.scss'
import AuthForms from '../auth-forms/auth-forms'

const TeamManager = ({ roles }) => {
	const [openModal, setOpenModal] = useState(false)

	function onCloseModal() {
		setOpenModal(false)
	}

	return (
		<>
			<Card className={styles.container}>
				<Button variant="contained" color="secondary" className={styles.button} onClick={() => setOpenModal(!openModal)} >Crie seu time</Button>
				<h3>Ou procure um para exercitar suas habilidades:</h3>
				<RoleIconList clickable={true} roles={roles} />
			</Card>
			<AuthForms open={openModal} onClose={onCloseModal}  />
		</>
	)
}

TeamManager.propTypes = {
	roles: PropTypes.object
}

export default TeamManager
