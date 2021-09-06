import { useLoaderContext } from 'contexts/LoaderContext'
import React from 'react'
import Loader from 'react-loader-spinner'

import { container } from './loader-layer.module.scss'

const LoaderLayer = () => {
	const isLoading = useLoaderContext()

	if (isLoading) {
		return (
			<div className={container}>
				<Loader
					type="Puff"
					height={100}
					width={100}
					visible={true}
				/>
			</div>
		)
	} else {
		return null
	}

}

export default LoaderLayer