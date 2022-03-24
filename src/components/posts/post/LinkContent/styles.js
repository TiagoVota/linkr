import styled from 'styled-components'


const containerHeight = '155px'
const containerMobileHeight = '115px'
const imgWidth = '154px'
const imgMobileWidth = '95px'

const Container = styled.div`
	width: 100%;
	max-height: ${containerHeight};

	display: flex;
	justify-content: start;

	:hover {
		cursor: pointer;
	}

	@media(max-width: 650px) {
		max-height: ${containerMobileHeight};
	}
`

const InfoWrapper = styled.div`
	width: calc(100% - ${imgWidth});
	padding: 24px 19px 23px;

	color: #CECECE;

	border-width: 1px 0px 1px 1px;
	border-style: solid;
	border-color: #4D4D4D;
	border-radius: 11px 0 0 11px;

	@media(max-width: 650px) {
		width: calc(100% - ${imgMobileWidth});
		padding: 7px 7px 8px 11px;
	}
`

const TitleText = styled.h4`
	margin-bottom: 5px;

	font-size: 16px;
	line-height: 19px;

	@media(max-width: 650px) {
		font-size: 11px;
		line-height: 13px;
	}
`

const DescriptionText = styled.h5`
	margin-bottom: 13px;

	font-size: 11px;
	line-height: 13px;

	color: #9B9595;

	@media(max-width: 650px) {
		font-size: 9px;
		line-height: 11px;
	}
`

const LinkText = styled.h6`
	font-size: 11px;
	line-height: 13px;

	@media(max-width: 650px) {
		font-size: 9px;
		line-height: 11px;
	}
`

const LinkImg = styled.img`
	width: ${imgWidth};
	height: ${containerHeight};

	border-radius: 0px 12px 13px 0px;
	
	@media(max-width: 650px) {
		width: ${imgMobileWidth};
		height: ${containerMobileHeight};
	}
`


export {
	Container,
	InfoWrapper,
	TitleText,
	DescriptionText,
	LinkText,
	LinkImg,
}
