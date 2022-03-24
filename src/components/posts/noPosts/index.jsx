import { IoSnowOutline } from 'react-icons/io5'
import { Container } from './styles'


function NoPosts() {
	return (
		<Container>
			<IoSnowOutline size={'150px'}/>

			<p>There are no posts yet</p>
		</Container>
	)
}


export default NoPosts

