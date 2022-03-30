import styled from 'styled-components'

function LogoMobile(){
	return (
		<LogoContainer>
			<Title>
				linkr
			</Title>
			<Headline>
				save, share and discover <br/>
				the best links on the web
			</Headline>
		</LogoContainer>
	)
}

export default LogoMobile

const LogoContainer = styled.div`
  @media(max-width: 650px) {
    width: 100%;
		height: 175px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;

    background: #151515;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
`

const Title = styled.h1`
	font-family: 'Passion One', sans-serif;
	font-weight: 700;
	font-size: 76px;
	line-height: 84px;
	color: #FFFFFF;

  display: none;

  @media(max-width: 650px) {
    display: initial;
  }
`

const Headline = styled.h1`
	font-family: 'Oswald', sans-serif;

	font-weight: 700;
	font-size: 23px;
	line-height: 34px;
	text-align: center;
	color: #FFFFFF;

  display: none;

  @media(max-width: 650px) {
    display: initial;
  }
`
