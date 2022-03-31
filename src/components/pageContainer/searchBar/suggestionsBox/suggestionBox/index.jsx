import { useNavigate } from 'react-router-dom'

import {
	Container,
	ImgContainer,
	NameContainer,
	UserImg,
	UserName,
	FollowingH4,
} from './styles'


function SuggestionBox({ userInfo }) {
	const { id, username, picture, isFollowing } = userInfo
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
				<UserName isFollowing={isFollowing} >
					{username}
				</UserName>

				{isFollowing && <FollowingH4>• following</FollowingH4>}
			</NameContainer>
		</Container>
	)
}


export default SuggestionBox
