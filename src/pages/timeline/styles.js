import styled from 'styled-components'


const Container = styled.div`
	background-color: #333333;
	height	: 100vh;
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
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	gap: 5px;
    width: 100%;
	padding-right: 15px;
`

const Link = styled.input`
	width: calc(100% - 30px);
	height: 30px;

	background: #EFEFEF;
	border-radius: 5px;

	::placeholder {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 300;
		font-size: 13px;
		line-height: 16px;
		color: #949494;

		padding-left: 11px;
	}
`

const Message = styled.input`
	width: calc(100% - 30px);
	height: 47px;

	background: #EFEFEF;
	border-radius: 5px;

	::placeholder {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 300;
		font-size: 13px;
		line-height: 16px;
		color: #949494;

		padding-left: 11px;
	}
`

const Button = styled.button`
	width: 112px;
	height: 22px;

	background: #1877F2;
	border-radius: 5px;
`


export {
	Container, CreatePost, Link, Message, Form, Button
}
