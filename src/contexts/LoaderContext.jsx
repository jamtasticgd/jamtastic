import React, { useEffect, useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import LoaderLayer from 'components/commons/atomics/loader-layer/LoaderLayer'
import axios from 'services/axios/axios'

const LoaderContext = createContext()
const LoaderActionsContext = createContext()

export const useLoaderContext = () => {
	const context = useContext(LoaderContext)
	if(context === undefined) {
		throw new Error('useLoaderContext must be called within its Provider')
	}
	return context
}

export const useLoaderActionsContext = () => {
	const context = useContext(LoaderActionsContext)
	if(context === undefined) {
		throw new Error('useLoaderActionsContext must be called within its Provider')
	}
	return context
}

const LoaderContextProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		axios.interceptors.request.use(config => {
			setIsLoading(true)
			return config
		}, error => {
			return Promise.reject(error)
		})

		axios.interceptors.response.use(response => {
			setIsLoading(false)
			return response
		}, error => {
			setIsLoading(false)
			return Promise.reject(error)
		})
	})

	return (
		<LoaderContext.Provider value={isLoading}>
			<LoaderActionsContext.Provider value={setIsLoading}>
				<>
					<LoaderLayer />
					{children}
				</>
			</LoaderActionsContext.Provider>
		</LoaderContext.Provider>
	)
}

LoaderContextProvider.propTypes = {
	children: PropTypes.node.isRequired
}

export default LoaderContextProvider