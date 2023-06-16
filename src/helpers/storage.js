export function getStateFromStorage(state, defaultValue = null) {
	return localStorage[state] || sessionStorage[state] || defaultValue
}

export function getStorage() {
	if (sessionStorage.getItem('rememberLogin') != undefined) {
		return sessionStorage
	}	else {
		return localStorage
	}
}
