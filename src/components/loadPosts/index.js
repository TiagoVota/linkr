import { Button } from './styles'
import { IoRefresh } from 'react-icons/io5'

function LoadPostsButton({ numberOfPosts, setPostsList, newPosts, setNumberOfNewPosts }) {

	function handleNewPosts() {
		setPostsList(newPosts)
		setNumberOfNewPosts(0)
	}

	return (
		<Button onClick={handleNewPosts}>
			{numberOfPosts} new posts, load more!
			<IoRefresh size='20px' />
		</Button>
	)
}

export default LoadPostsButton