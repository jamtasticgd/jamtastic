import React from 'react'

import { Avatar, IconButton } from '@material-ui/core'
import { container, btn, avatar } from './navbar.module.scss'

import { useLoaderContext } from 'contexts/LoaderContext'
import { useUserContext } from 'contexts/UserContext'

const Navbar = () => {
	const isLoading = useLoaderContext()
	const { name } = useUserContext()

	return (
		<header className={container}>
			<img src={'/images/jamtastic-white-logo.png'} alt='jamtastic' />
			<IconButton className={btn} disabled={isLoading}>
				<Avatar className={avatar}>{name ? name[0].toUpperCase() : null}</Avatar>
			</IconButton>
		</header>
	)
}

export default Navbar