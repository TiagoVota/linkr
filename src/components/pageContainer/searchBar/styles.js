import styled from 'styled-components'

import { headerHeight } from '../../../utils/sharedSizes'


const Container = styled.div`
	width: max(45vw, 350px);
	margin-top: calc(14px - ${headerHeight});

	position: fixed;
	z-index: 3;

	display: flex;
	flex-direction: column;

	@media(max-width: 650px) {
		width: 94%;
		margin: 10px 0px;

		position: relative;
		z-index: 0;
	}
`


export {
	Container,
}
