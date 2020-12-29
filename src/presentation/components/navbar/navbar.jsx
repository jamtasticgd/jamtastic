import React from 'react'

import { Avatar, IconButton } from '@material-ui/core'
import { container, btn, avatar } from './navbar.module.scss'

const Navbar = () => {
	return (
		<header className={container}>
			<img src={'/images/jamtastic-white-logo.png'} alt='jamtastic' />
			<IconButton className={btn}>
				<Avatar className={avatar} />
			</IconButton>
		</header>
	)
}

export default Navbar