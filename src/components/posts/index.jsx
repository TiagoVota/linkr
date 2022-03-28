import NoPosts from './noPosts'
import Post from './post'


function Posts({ postsList }) {
	const havePosts = !!(postsList?.[0]?.postId)

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
