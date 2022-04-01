import styled from 'styled-components'

import { headerHeight } from '../../utils/sharedSizes'


const profileSize = '50px'
const profileMobileSize = '40px'

const Container = styled.div`
	width: 100%;
	height: calc(100% - ${headerHeight});

	margin-top: ${headerHeight};
	
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
`

const Title = styled.div`
	height: 103px;

	display: flex;
	align-items: end;

	font-family: 'Oswald';
	font-weight: 700;
	font-size: 43px;
	line-height: 64px;

	overflow: hidden;
	
	color: #FFFFFF;

	@media(max-width: 650px) {
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

const ProfilePicture = styled.img`
	width: ${profileSize};
	height: ${profileSize};

	border-radius: 26px;

	margin: 0 10px;

	@media(max-width: 650px) {
		width: ${profileMobileSize};
		height: ${profileMobileSize};
	}
`

const FlexHeader = styled.div`
	padding-bottom: 53px;

	position: relative;

	display: flex;
	align-items: end;
`

const FlexContent = styled.div`
	display: flex;
	gap: 25px;
`

export {
	Container,
	FlexHeader,
	FlexContent,
	Title,
	ContentContainer,
	ProfilePicture
}
