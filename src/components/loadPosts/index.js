import { Button } from './styles'
import { IoRefresh } from 'react-icons/io5'

function LoadPostsButton() {
	return (
		<Button>
			12 new posts, load more!
			<IoRefresh size='20px' />
		</Button>
	)
}

export default LoadPostsButton