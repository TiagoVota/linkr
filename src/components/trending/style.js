import styled from 'styled-components'

const Container = styled.div`
	background-color: #171717;
	height: 406px;
	width: 301px;
	border-radius: 16px;

	position: sticky;
	top: 92px;

	h1{
		font-family: 'Oswald';
		font-style: normal;
		font-weight: 700;
		font-size: 27px;
		line-height: 40px;
		color: #FFFFFF;

		padding: 9px 0 12px 16px;

		border-bottom: 1px solid #484848;
	}

	@media(max-width: 950px) {
		display: none;
	}
`

const List = styled.div`
	padding: 22px 0 0 16px; 
`

const Hashtag = styled.p`
	font-family: 'Lato';
	font-weight: 700;
	font-size: 19px;
	line-height: 23px;
	letter-spacing: 0.05em;
	color: #FFFFFF;

	margin-bottom: 8px;
	
	:hover {
		cursor: pointer;
		color: #1877F2;
	}
`
export {
	Container,
	List,
	Hashtag
}