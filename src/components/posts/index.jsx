import NoPosts from './noPosts'
import Post from './post'


function Posts({ postsList, userPage }) {
	const havePosts = !!(postsList?.[0]?.postId)

	return (
		<div>
			{
				havePosts
					? postsList.map((postInfo) => <Post
						key={postInfo.postId}
						postInfo={postInfo}
					/>)
					: <NoPosts message={'There are no posts yet'} userPage={userPage}/>
			}
		</div>
	)
}


export default Posts
