import styled from 'styled-components'


const Container = styled.div`
	display: flex;
	justify-content: center;

	height	: 100vh;
	padding-top: 80px;

	background-color: #333333;

`

const CreatePost = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	width: 100%;
	height: 164px;
	padding-top: 10px;

	background: #FFFFFF;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	div {
		font-family: 'Lato', sans-serif;
		font-weight: 300;
		font-size: 17px;
		line-height: 20px;
		color: #707070;

		height: fit-content;
	}

	@media(min-width: 611px) {
		justify-content: start;

		width: 611px;
		height: 209px;

		background: #FFFFFF;
		border-radius: 16px;
		
		padding-top: 20px;

		div {
			font-size: 20px;
			line-height: 24px;
		}
	}
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	gap: 5px;
    width: 100%;

	@media(min-width: 611px) {
		padding-left: 60px;
	}
`

const Link = styled.textarea`
	width: calc(100% - 30px);
	height: 30px;

	background: #EFEFEF;
	border-radius: 5px;
	padding-left: 11px;
	margin-right: 15px;

	font-family: 'Lato', sans-serif;

	::placeholder {
		font-family: 'Lato', sans-serif;
		font-style: normal;
		font-weight: 300;
		font-size: 13px;
		line-height: 16px;
		color: #949494;
	}
`

const Message = styled.textarea`
	width: calc(100% - 30px);
	height: 47px;

	background: #EFEFEF;
	border-radius: 5px;
	padding-left: 11px;
	margin-right: 15px;

	font-family: 'Lato', sans-serif;

	::placeholder {
		font-family: 'Lato', sans-serif;
		font-style: normal;
		font-weight: 300;
		font-size: 13px;
		line-height: 16px;
		color: #949494;
	}

	@media(min-width: 611px) {
		height: 66px;
	}
`

const Button = styled.button`
	width: 112px;
	height: 22px;
	margin-right: 15px;

	background: #1877F2;
	border-radius: 5px;
`

const Avatar = styled.div`
	display: none;
	margin-left: 16px;
	margin-right: 16px;
	img{
		width: 50px;
		height: 50px;
		border-radius: 26px;
		object-fit: cover;
		cursor: pointer;
	}

	@media(min-width: 611px) {
		display: flex;
	}
`
export {
	Container, CreatePost, Link, Message, Form, Button, Avatar
}
