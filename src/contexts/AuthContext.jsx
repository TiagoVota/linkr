import { useState, createContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const persistedAuth = JSON.parse(localStorage.getItem('auth'))
	const persistedPicture = JSON.parse(localStorage.getItem('picture'))
	const [auth, setAuth] = useState(persistedAuth)
	const [picture, setPicture] = useState(persistedPicture)

	const login = (authData) => {
		setAuth(authData.token)
		setPicture(authData.authDetails.picture)
		localStorage.setItem('auth', JSON.stringify(authData.token))
		localStorage.setItem('picture', JSON.stringify(authData.authDetails.picture))
	}

	return (
		<AuthContext.Provider value={{ auth, picture, login }}>
			{children}
		</AuthContext.Provider>
	)
}


export default AuthContext
export {
	AuthProvider,
}
