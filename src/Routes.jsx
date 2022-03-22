import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom'

import {
	Login,
	SignUp,
	Timeline,
	UserPage,
	HashtagPage,
} from './pages/index'


const PagesRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />}/>
				<Route path='/sign-up' element={<SignUp />}/>
				<Route path='/timeline' element={<Timeline />}/>
				<Route path='/user/:userId' element={<UserPage />}/>
				<Route path='/hashtag/:hashtag' element={<HashtagPage />}/>
			</Routes>
		</Router>
	)
}


export default PagesRoutes
