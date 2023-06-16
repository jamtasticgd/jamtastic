import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { getStateFromStorage } from 'helpers/storage'

const UserContext = createContext()

export const useUserContext = () => {
	const context = useContext(UserContext)
	if(context === undefined) {
		throw new Error('useUserContext must be called within its Provider')
	}
	return context
}

const UserContextProvider = ({ children }) => {
	const [name, setName] = useState(getStateFromStorage('name'))

	return (
		<UserContext.Provider value={{name, setName}}>
			{children}
		</UserContext.Provider>
	)
}

UserContextProvider.propTypes = {
	children: PropTypes.node.isRequired
}

export default UserContextProvider
