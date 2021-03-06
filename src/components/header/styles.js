import styled from 'styled-components'

import { headerHeight } from '../../utils/sharedSizes'


const Container = styled.header`
	width: 100%;
	height: ${headerHeight};
	padding: 10px 0;

	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;

	display: flex;
	justify-content: space-between;
	align-items: center;

	font-weight: 700;
	font-size: 26px;
	line-height: 31px;
	color: #FFFFFF;

	background-color: #151515;

	@media(max-width: 650px) {
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
`

const Logo = styled.h1`
	padding-left: 28px;

	font-family: 'Passion One';
	font-weight: 700;
	font-size: 49px;
	line-height: 54px;
	letter-spacing: 0.05em;

	color: #FFFFFF;

	@media(max-width: 650px) {
		padding-left: 17px;

		font-size: 45px;
		line-height: 50px;
	}
`


export {
	Container,
	Logo,
}
