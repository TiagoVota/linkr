import styled from 'styled-components'

import NoPosts from './noPosts'
import Post from './post'


const Posts = ({ postsList }) => {
	const havePosts = postsList.length > 0
	return (
		<>
			{
				havePosts
					? postsList.map((postInfo) => <Post
						key={postInfo.postId}
						postInfo={postInfo}
					/>)
					: <NoPosts />
			}
		</>
	)
}


export default Posts


const Container = styled.div`
	
`
