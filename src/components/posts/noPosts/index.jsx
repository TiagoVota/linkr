import { IoSnowOutline } from 'react-icons/io5'
import { Container } from './styles'


function NoPosts({message, userPage}) {
	return (
		<Container userPage={userPage}>
			<IoSnowOutline size={'150px'}/>

			<p>{message}</p>
		</Container>
	)
}


export default NoPosts

