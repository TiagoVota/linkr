import { Link } from 'react-router-dom'
import Menu from './menu'

import { Container, Logo } from './styles'


function Header() {
	return (
		<Container>
			<Link to='/timeline'>
				<Logo>linkr</Logo>
			</Link>

			<Menu />
		</Container>
	)
}


export default Header
