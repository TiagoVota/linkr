import { useNavigate } from 'react-router-dom'

import {
	Container,
	ImgContainer,
	NameContainer,
	UserImg,
	UserName
} from './styles'


function SuggestionBox({ userInfo }) {
	const { id, username, picture } = userInfo
	const navigate = useNavigate()

	function handleClick() {
		navigate(`/user/${id}`)
	}
	return (
		<Container onClick={handleClick}>
			<ImgContainer>
				<UserImg src={picture} alt={`'${username}' profile image`} />
			</ImgContainer>
			
			<NameContainer>
				<UserName>{username}</UserName>
			</NameContainer>
		</Container>
	)
}


export default SuggestionBox
