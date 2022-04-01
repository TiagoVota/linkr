import NoPosts from './noPosts'
import Post from './post'


function Posts({ postsList, userPage, noPostsMessage }) {
	const havePosts = Boolean(postsList?.[0]?.postId)
	
	const message = noPostsMessage || 'There are no posts yet'

	return (
		<div>
			{
				havePosts
					? postsList.map((postInfo) => <Post
						key={Math.floor(Math.random() * 424242) * postInfo.postId}
						postInfo={postInfo}
					/>)
					: <NoPosts message={message} userPage={userPage}/>
			}
		</div>
	)
}


export default Posts
