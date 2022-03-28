import styled from 'styled-components'


const Container = styled.li`
	width: 100%;
	height: 55px;
	
	display: flex;
	justify-content: center;
	align-items: center;
	
	font-size: 19px;
	line-height: 23px;
	
	color: #515151;
	
	@media(max-width: 650px) {
		font-size: 17px;
		line-height: 20px;
	}
`


export {
	Container,
}
