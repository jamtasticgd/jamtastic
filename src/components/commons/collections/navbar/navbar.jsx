import React from 'react'

import { Avatar, IconButton } from '@material-ui/core'
import styles from './navbar.module.scss'

import { useLoaderContext } from 'contexts/LoaderContext'
import { useUserContext } from 'contexts/UserContext'

const Navbar = () => {
	const isLoading = useLoaderContext()
	const { name } = useUserContext()

	return (
		<header className={styles.container}>
			<img src={'/images/jamtastic-white-logo.png'} alt='jamtastic' />
			<IconButton className={styles.btn} disabled={isLoading}>
				<Avatar className={styles.avatar}>{name ? name[0].toUpperCase() : null}</Avatar>
			</IconButton>
		</header>
	)
}

export default Navbar
