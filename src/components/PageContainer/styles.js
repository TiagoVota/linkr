import styled from 'styled-components'

import { headerHeight } from '../../utils/sharedSizes'


const Container = styled.div`
	width: 100vw;
	height: calc(100vh - ${headerHeight});

	margin-top: ${headerHeight};
	
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
`

const Title = styled.div`
	height: 160px;
	padding-bottom: 43px;

	display: flex;
	align-items: end;

	font-family: 'Oswald';
	font-weight: 700;
	font-size: 43px;
	line-height: 64px;
	color: #FFFFFF;

	@media(max-width: 650px) {
		height: 87px;
		padding-bottom: 19px;
		padding-left: 17px;
	}
`

const ContentContainer = styled.div`
	width: calc(611px + 25px + 301px);

	@media(max-width: 950px) {
		width: 611px;
	}

	@media(max-width: 650px) {
		width: 100vw;
	}
`


export {
	Container,
	Title,
	ContentContainer,
}
