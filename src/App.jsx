import { AuthProvider } from './contexts/AuthContext'

import ResetStyleCSS from './styles/ResetStyleCSS'
import GlobalStyle from './styles/GlobalStyle'

import PagesRoutes from './Routes'


const App = () => {
	return (
		<AuthProvider>
			<ResetStyleCSS />
			<GlobalStyle />
		
			<PagesRoutes />
		</AuthProvider>
	)
}


export default App
