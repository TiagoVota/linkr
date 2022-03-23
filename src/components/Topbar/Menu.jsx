import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import useAuth from '../../hooks/useAuth.jsx'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

function Menu() {
	const [showDropDown, setShowDropDown] = useState(false)
	const navigate = useNavigate()
	const {picture} = useAuth()
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
	
	function logout(){
		localStorage.removeItem('auth')
		localStorage.removeItem('picture')
		navigate('/')
		window.location.reload()
	}
	return(
		<>
			<Container ref = {ref} onClick={() => setShowDropDown(!showDropDown)}>
				{showDropDown ?
					(<IoIosArrowDown color='white' cursor='pointer'/>) : <IoIosArrowUp color='white' cursor='pointer'/>
				}
				<Avatar> <img src = {picture}/> </Avatar>
				{showDropDown ?
					(<DropDownMenu>
						<li onClick={logout}>Logout</li>
					</DropDownMenu>) : ''}
			</Container>
		</>
	)
}

export default Menu

const Container = styled.header`
	display: flex;
	align-items: center;
	gap: 10px;
	position: relative;
	z-index: 10;
`

const Avatar = styled.div`
	img{
 width: 53px;
	height: 53px;
	border-radius: 26px;
	object-fit: cover;
	cursor: pointer;
	}

 @media (max-width: 700px) {
  & img {
  	width: 44px;
  	height: 44px;
		}
	}
`

const DropDownMenu = styled.div`
 width: 133px;
	height: 47px;
	background-color: #151515;
	border-radius: 0px 0px 0px 20px;
	position: absolute;
	bottom: -50px;
	right: -20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0 17px 0;
	cursor: pointer;
	li {
		font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.05em;
		list-style-type: none;
  cursor: pointer;
		color: white;
	}
	@media (max-width: 700px) {
		width: 130px;
  height: 47px;
  li{
			font-size: 15px;
			line-height: 18px;
  }
  }
	}
`