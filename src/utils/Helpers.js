export const getValueFromLocalStorage = key => {
	return localStorage.getItem(`${key}`) ? JSON.parse(localStorage.getItem(`${key}`)) : null
}

export const setValueInLocalStorage = (key, value) => {
	localStorage.setItem(`${key}`, JSON.stringify(value))
	return
}