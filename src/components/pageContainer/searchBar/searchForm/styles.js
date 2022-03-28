import styled from 'styled-components'
import { DebounceInput } from 'react-debounce-input'


const FormContainer = styled.form`
	width: 100%;
	height: 45px;

	z-index: 1;

	display: flex;

	border-radius: 8px;

	background-color: #FFFFFF;
`

const StyledDebounceInput = styled(DebounceInput)`
	height: 100%;
	width: 90%;
	padding-left: 17px;

	font-size: 19px;
	line-height: 23px;
	
	border-radius: 8px 0px 0px 8px;
	
	color: #C6C6C6;
	background-color: inherit;

	@media(max-width: 650px) {
		font-size: 17px;
		line-height: 20px;
	}
`

const SearchButton = styled.button`
	height: 100%;
	width: 15%;

	border-radius: 0px 8px 8px 0px;

	background-color: inherit;
`


export {
	FormContainer,
	StyledDebounceInput,
	SearchButton,
}
