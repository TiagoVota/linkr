import styled from 'styled-components'

const ContainerDelete = styled.div`
	display: flex;
	justify-content: space-around;
	position: relative;
	left: 470px;
	bottom: 30px;
	z-index: 50;

	width: 60px;
	height: 20px;

	@media (max-width: 650px) {
		left: 520px;
	}
`

export {
	ContainerDelete
}
