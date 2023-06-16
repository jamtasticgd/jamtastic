import React from 'react'

import { Avatar, IconButton } from '@material-ui/core'
import UserMenu from '../user-menu/user-menu'
import styles from './navbar.module.scss'

import { useLoaderContext } from 'contexts/LoaderContext'
import { useUserContext } from 'contexts/UserContext'

const Navbar = () => {
	const isLoading = useLoaderContext()
	const { name } = useUserContext()
	const loggedIn = Boolean(name)

	const [anchorEl, setAnchorEl] = React.useState(null)

	function handleClick(event) {
		setAnchorEl(event.currentTarget)
	}

	function handleClose() {
		setAnchorEl(null)
	}

	return (
		<header className={styles.container}>
			<img src={'/images/jamtastic-white-logo.png'} alt='jamtastic' />
			<IconButton className={styles.btn} disabled={isLoading} onClick={handleClick}>
				<Avatar className={styles.avatar}>{name ? name[0].toUpperCase() : null}</Avatar>
			</IconButton>
			<UserMenu anchorEl={anchorEl} loggedIn={loggedIn} onClose={handleClose} />

		</header>
	)
}

export default Navbar
