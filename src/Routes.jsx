import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom'

import {
	Login,
	SignUp,
} from './pages/index'


const PagesRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/auth/login' element={<Login />}/>
				<Route path='/auth/sign-up' element={<SignUp />}/>
			</Routes>
		</Router>
	)
}


export default PagesRoutes
