import { useEffect, useState } from 'react'

import useAuth from '../../hooks/useAuth'

import Posts from '../posts'
import LoaderSpinner from '../loaderSpinner'

import InfiniteScroll from 'react-infinite-scroller'
import apiHashtags from '../../services/api.hashtags'
import apiPosts from '../../services/api.post'
import apiUsers from '../../services/api.user'

import { Div } from './style'
import { useParams } from 'react-router-dom'


function Scroller({setOffset, offset, setPostsList, postsList, hashtag, user, noPostsMessage}) {
	const { auth: { token } } = useAuth()
	const [hasMore, setHasMore] = useState(false)
	const { userId } = useParams()

	useEffect(() => {
		setOffset(offset + 10)
		if (postsList.length === 10) setHasMore(true)
	},[])

	
	async function fetchPosts() {
		if (hasMore) {
			try {
				if (hashtag) {
					const data = await apiHashtags.getHashtag(offset, hashtag, token)
					return data.data
				} 
				if (user) {
					const data = await apiUsers.getUserPosts(offset, userId, token)
					return data.data
				} else {
					const data = await apiPosts.getTimelinePosts(offset, token)
					return data.data
				}
			} catch (response) {
				return console.log(response)
			}
		}
	}

	async function fetchData() {
		try {
			const fetchedPosts = await fetchPosts()
			setPostsList([...postsList, ...fetchedPosts])
			if (fetchedPosts.length < 10) {
				setHasMore(false)
			}
			setOffset(offset + 10)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<InfiniteScroll
			loadMore={fetchData}
			hasMore={hasMore}
			loader={
				<Div key={token}>
					<LoaderSpinner 
						type='TailSpin' 
						color='#6D6D6D' 
						height='36'
						width='36'/>
					<p>Loading more posts...</p>
				</Div>}
		>
			{<Posts 
				postsList={postsList}
				noPostsMessage={noPostsMessage}
			/>}
		</InfiniteScroll>
	)
}


export default Scroller
