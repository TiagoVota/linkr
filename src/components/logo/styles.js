import styled from 'styled-components'


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
    width: 100%;
    height: 30%;

    padding-left: 0px;
	}
`

const Title = styled.h1`
	font-family: 'Passion One', sans-serif;
	font-weight: 700;
	font-size: 106px;
	color: #FFFFFF;

	@media(max-width: 650px) {
		font-size: 76px;
		text-align: center;
	}
`

const Headline = styled.h1`
	font-family: 'Oswald', sans-serif;
	font-weight: 700;
	font-size: 43px;
	line-height: 50px;
	color: #FFFFFF;
	
	@media(max-width: 650px) {
		font-size: 23px;
		line-height: 34px;
		text-align: center;
	}
`


export {
	LogoContainer,
	Title,
	Headline,
}
