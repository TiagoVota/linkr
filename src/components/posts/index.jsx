import styled from 'styled-components'

import NoPosts from './noPosts'
import Post from './post'


const Posts = ({ postsList }) => {
	const havePosts = postsList?.[0]?.postId !== null

	return (
		<div>
			{
				havePosts
					? postsList.map((postInfo) => <Post
						key={postInfo.postId}
						postInfo={postInfo}
					/>)
					: <NoPosts message={'There are no posts yet'}/>
			}
		</div>
	)
}


export default Posts


const Container = styled.div`
	
`
