import styled from 'styled-components'


const Container = styled.header`
	width: 100vw;
	height: 72px;
	padding: 10px 0;

	position: fixed;
	top: 0;
	left: 0;

	display: flex;
	justify-content: space-between;
	align-items: center;

	font-weight: bold;
	font-size: 26px;
	line-height: 31px;
	color: #FFFFFF;

	background-color: #151515;
`

const Logo = styled.h1`
	padding-left: 28px;

	font-family: 'Passion One';
	font-weight: 700;
	font-size: 49px;
	line-height: 54px;
	letter-spacing: 0.05em;

	color: #FFFFFF;
`


export {
	Container,
	Logo,
}
