import { Link } from 'react-router-dom'

import { Container, Logo } from './styles'


function Header() {
	return (
		<Container>
			<Link to='/timeline'>
				<Logo>linkr</Logo>
			</Link>
		</Container>
	)
}


export default Header
