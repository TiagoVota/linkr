import { useContext } from 'react'

import ReloadPostsContext from '../contexts/ReloadPostsContext'


const useReloadPosts = () => useContext(ReloadPostsContext)


export default useReloadPosts
