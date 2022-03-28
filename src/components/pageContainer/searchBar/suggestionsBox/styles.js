import styled from 'styled-components'


const boxPadding = '15px'
const userBoxHeight = '55px'

const Container = styled.ul`
	width: 100%;
	min-height: calc(2*${boxPadding} + ${userBoxHeight});
	max-height: calc(${boxPadding} + 4.5*${userBoxHeight});
	margin-top: -8px;
	padding: ${boxPadding} 0px;

	display: ${p => p.isHidden ? 'none' : 'flex'};
	flex-direction: column;
	justify-content: start;

	overflow-y: scroll;

	background-color: #E7E7E7;

	border-radius: 0px 0px 8px 8px;

	::-webkit-scrollbar {
		display: none;
	}

	@media(max-width: 650px) {
		max-height: calc(${boxPadding} + 2.5*${userBoxHeight});
	}
`


export {
	Container,
}
