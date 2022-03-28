import styled from 'styled-components'


const Container = styled.ul`
	margin-right: 20px;
	display: flex;
	align-items: center;
	gap: 10px;
	position: relative;
	z-index: 2;
`

const Avatar = styled.div`
	img{
	width: 53px;
	height: 53px;
	border-radius: 26px;
	object-fit: cover;
	cursor: pointer;
	}

	@media (max-width: 700px) {
		& img {
			width: 44px;
			height: 44px;
		}
	}
`

const DropDownMenu = styled.div`
	width: 133px;
	height: 47px;
	background-color: #151515;
	border-radius: 0px 0px 0px 20px;
	position: absolute;
	bottom: -50px;
	right: -20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0 17px 0;
	cursor: pointer;

	li {
		font-weight: 700;
		font-size: 17px;
		line-height: 20px;
		letter-spacing: 0.05em;
		list-style-type: none;

		cursor: pointer;
		color: #FFFFFF;

		:hover {
			color: #1877F2;
		}
	}

	@media (max-width: 700px) {
		width: 130px;
		height: 47px;

		li {
			font-size: 15px;
			line-height: 18px;
		}
  }
`


export {
	Container,
	Avatar,
	DropDownMenu,
}
