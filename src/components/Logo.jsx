import styled from 'styled-components'


const Logo = () => {
	return (
		<LogoContainer>
			<Title>
				linkr
			</Title>
			<Headline>
				save, share and discover
				the best links on the web
			</Headline>
		</LogoContainer>
	)
}


export default Logo


const LogoContainer = styled.div`
	width: 100%;
	height: 175px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	position: absolute;
	top: 0;

	background: #151515;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Title = styled.h1`
	font-family: 'Passion One', sans-serif;
	font-weight: 700;
	font-size: 76px;
	line-height: 84px;

	letter-spacing: 0.05em;

	color: #FFFFFF;
`

const Headline = styled.h1`
	font-family: 'Oswald', sans-serif;
	width: 237px;
	height: 68px;

	font-weight: 700;
	font-size: 23px;
	line-height: 34px;
	text-align: center;

	color: #FFFFFF;
`