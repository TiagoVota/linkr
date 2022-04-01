import NoPosts from './noPosts'
import Post from './post'


function Posts({ postsList, userPage, noPostsMessage }) {
	const havePosts = Boolean(postsList?.[0]?.postId)
	console.log({ postsList, havePosts })
	const message = noPostsMessage || 'There are no posts yet'

	return (
		<div>
			{
				havePosts
					? postsList.map((postInfo) => <Post
						key={postInfo.postId}
						postInfo={postInfo}
					/>)
					: <NoPosts message={message} userPage={userPage}/>
			}
		</div>
	)
}


export default Posts
