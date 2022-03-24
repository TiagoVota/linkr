import { Container } from './styles'
import CreatePost from './createPost'

import Topbar from '../../components/Topbar/Topbar'


function Timeline() {
	const [link, setLink] = useState('')
	const [message, setmessage] = useState('')

	return (
		<>
			<Topbar></Topbar>
			<Container>
				<CreatePost></CreatePost>
			</Container>
		</>
	)
}


export default Timeline
