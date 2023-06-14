import { useLoaderContext } from 'contexts/LoaderContext'
import React from 'react'
import { Puff } from 'react-loader-spinner'

import styles from './loader-layer.module.scss'

const LoaderLayer = () => {
	const isLoading = useLoaderContext()

	if (isLoading) {
		return (
			<div className={styles.container}>
				<Puff
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
