import { AuthProvider } from './contexts/AuthContext'
import { ReloadPostsProvider } from './contexts/ReloadPostsContext'

import ResetStyleCSS from './styles/ResetStyleCSS'
import GlobalStyle from './styles/GlobalStyle'

import PagesRoutes from './Routes'


function App() {
	return (
		<AuthProvider>
			<ReloadPostsProvider>
				<ResetStyleCSS />
				<GlobalStyle />
		
				<PagesRoutes />
			</ReloadPostsProvider>
		</AuthProvider>
	)
}


export default App
