import * as Loaders from 'react-loader-spinner'

import { Container } from './styles'


const LoaderSpinner = ({ type, color, height, width, heightDiscount }) => {
	const Loader = Loaders[type || 'ThreeDots']
	
	return (
		<Container heightDiscount={heightDiscount || '0px'}>
			<Loader
				color={color || '#FFFFFF'}
				height={height || width || '100'}
				width={width || height || '100'}
			/>
		</Container>
	)
}


export default LoaderSpinner



