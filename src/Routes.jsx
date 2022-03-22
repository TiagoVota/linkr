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
				<Route path='/' element={<Login />}/>
				<Route path='/sign-up' element={<SignUp />}/>
			</Routes>
		</Router>
	)
}


export default PagesRoutes
