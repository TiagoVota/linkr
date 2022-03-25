import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Avatar, Container, DropDownMenu } from './styles.js'

import useAuth from '../../../hooks/useAuth.jsx'


function Menu() {
	const { auth: { authDetails: { picture } }, logout } = useAuth()
	const [showDropDown, setShowDropDown] = useState(false)
	const navigate = useNavigate()
	const ref = useRef()

	useEffect(() => {
		function checkShowDrop(e) {
			if (showDropDown && ref.current && !ref.current.contains(e.target)) {
				setShowDropDown(false)
			}
		}
		document.addEventListener('mousedown', checkShowDrop)
		return () => {
			document.removeEventListener('mousedown', checkShowDrop)
		}
	}, [showDropDown])
	
	function makeLogout() {
		logout()
		navigate('/')
	}

	return (
		<Container ref={ref} onClick={() => setShowDropDown(!showDropDown)}>
			{showDropDown
				? <IoIosArrowDown color='#FFFFFF' cursor='pointer'/>
				: <IoIosArrowUp color='#FFFFFF' cursor='pointer'/>
			}

			<Avatar>
				<img src={picture}/>
			</Avatar>

			{showDropDown
				? <DropDownMenu><li onClick={makeLogout}>Logout</li></DropDownMenu>
				: ''
			}
		</Container>
	)
}


export default Menu
