import { useCallback, useState } from 'react'

export const useArrayHandler = initial => {
	const [value, setValue] = useState(initial)

	return {
		value,
		toggleValue: useCallback(item => {
			if(value.indexOf(item) === -1) {
				setValue(array => [...array, item])
			} 
			else {
				setValue(array => array.filter(currentValue => currentValue !== item))
			}
		})
	}
}