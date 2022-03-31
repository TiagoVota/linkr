import styled from 'styled-components'


const imgContainerWidth = 'max(12%, 80px)'
const followingMsgWidth = '95px'

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
	width: ${imgContainerWidth};

	display: flex;
	justify-content: center;
`

const UserImg = styled.img`
	width: 39px;
	height: 39px;

	border-radius: 50%;
`

const NameContainer = styled.div`
	width: calc(100% - ${imgContainerWidth});
	padding-right: 10px;

	display: flex;
	justify-content: start;
	align-items: center;

	font-size: 19px;
	line-height: 23px;

	@media(max-width: 650px) {
		font-size: 17px;
		line-height: 20px;
	}
`

const UserName = styled.h3`
	overflow: hidden;
	text-overflow: ellipsis;
	word-break: break-word;
	display: -webkit-box;

	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`

const FollowingH4 = styled.h4`
	width: ${followingMsgWidth};
	margin-left: 7px;

	flex-shrink: 0;
	
	white-space: nowrap;

	color: #C5C5C5;
`


export {
	Container,
	UserImg,
	UserName,
	ImgContainer,
	NameContainer,
	FollowingH4,
}

