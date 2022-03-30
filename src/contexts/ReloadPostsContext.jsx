import { useState, createContext } from 'react'

import { makeUniqueValue } from '../helpers/reloadHelper'


const ReloadPostsContext = createContext()

const ReloadPostsProvider = ({ children }) => {
	const [reloadPostsObserver, setReloadPostsObserver] = useState(makeUniqueValue())

	const warnReloadPosts = () => setReloadPostsObserver(makeUniqueValue())

	return (
		<ReloadPostsContext.Provider 
			value={{ reloadPostsObserver, warnReloadPosts }}
		>
			{children}
		</ReloadPostsContext.Provider>
	)
}


export default ReloadPostsContext
export {
	ReloadPostsProvider,
}
