import styled from 'styled-components'
import Menu from './Menu'
import { Link } from 'react-router-dom'

function Topbar() {
	return(
		<TopbarContainer>
			<Link to='/timeline'><p>Linkr</p></Link>
			<Menu/>
		</TopbarContainer>
	)
}

export default Topbar

const TopbarContainer = styled.header`
 position: fixed;
 width: 100%;
 height: 72px;
 top: 0;
 left:0;
 background-color: #151515;
 z-index: 5;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 0 20px;
    
 & p {
  font-family: 'Passion One', sans-serif;
  font-size: 35px;
  font-weight: 700;
  color: white;
 }
`