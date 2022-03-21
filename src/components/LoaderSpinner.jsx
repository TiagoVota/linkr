import Loader from 'react-loader-spinner'
import styled from 'styled-components'


const LoaderSpinner = ({ type, color, height, width, heightDiscount }) => {
	return (
		<Container heightDiscount={heightDiscount || '0px'}>
			<Loader
				type={type || 'ThreeDots'}
				color={color || '#FFFFFF'}
				height={height || width || '100'}
				width={width || height || '100'}
			/>
		</Container>
	)
}


export default LoaderSpinner


const Container = styled.div`
	width: 100%;
	height: calc(100% - ${p => p.heightDiscount});
	
	display: flex;
	justify-content: center;
	align-items: center;
`
