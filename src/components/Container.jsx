import styled from 'styled-components'

const Container = ({ children }) => {
	return (
		<Box>
			{children}
		</Box>
	)
}


export default Container


const Box = styled.div`
	width: 100vw;
	height: 100vh;
	
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: #333333;
`
