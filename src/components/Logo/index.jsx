import styled from 'styled-components'

function Logo(){
	return (
		<LogoContainer>
			<div>
				<Title>
					linkr
				</Title>
				<Headline>
					save, share and discover <br />
					the best links on the web
				</Headline>
			</div>
		</LogoContainer>
	)
}


export default Logo


const LogoContainer = styled.div`
	width: 60%;
	height: 100%;

	background: #151515;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding-left: 144px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 650px) {
		display: none;
	}
`

const Title = styled.h1`
	font-family: 'Passion One', sans-serif;
	font-weight: 700;
	font-size: 76px;
	line-height: 84px;

	color: #FFFFFF;
`

const Headline = styled.h1`
	font-family: 'Oswald', sans-serif;
	font-weight: 700;
	font-size: 23px;
	line-height: 34px;

	color: #FFFFFF;
`
