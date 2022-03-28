import styled from 'styled-components'


const Container = styled.li`
	width: 100%;
	height: 55px;

	display: flex;
	flex-shrink: 0;
	align-items: center;

	color: #515151;

	:hover {
		background-color: #D7D7D7;

		cursor: pointer;
	}
`

const ImgContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-grow: 12;
`

const UserImg = styled.img`
	width: 39px;
	height: 39px;

	border-radius: 50%;
`

const NameContainer = styled.div`
	display: flex;
	justify-content: start;
	flex-grow: 78;
`

const UserName = styled.h3`
	font-size: 19px;
	line-height: 23px;

	@media(max-width: 650px) {
		font-size: 17px;
		line-height: 20px;
	}
`


export {
	Container,
	UserImg,
	UserName,
	ImgContainer,
	NameContainer,
}

