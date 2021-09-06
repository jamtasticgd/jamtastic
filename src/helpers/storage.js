export function getStateFromStorage(state, defaultValue = null) {
	return localStorage[state] || sessionStorage[state] || defaultValue
}