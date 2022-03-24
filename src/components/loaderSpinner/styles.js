import styled from 'styled-components'


const Container = styled.div`
	width: 100%;
	height: calc(100% - ${p => p.heightDiscount});
	
	display: flex;
	justify-content: center;
	align-items: center;
`


export {
	Container,
}
