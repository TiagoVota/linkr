import styled from 'styled-components'



const Container = styled.button`

	width: 100%;
	height: 45px;
	margin: 5px 0px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	font-size: 11px;
	line-height: 13px;

	color: #FFFFFF;
	background-color: inherit;

	:hover {
		filter: none;
	}
		@media(max-width: 650){
			font-size: 9px;
  }
`

export {
	Container
}