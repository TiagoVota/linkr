import { useEffect, useState } from 'react'
import useInterval from 'use-interval'

import useAuth from '../../hooks/useAuth'
import useReloadPosts from '../../hooks/useReloadPosts'

import api from '../../services/api.post'
import { errorModal } from '../../factories/modalFactory'
import { makeTimelinePostMessage } from '../../helpers/postHelper'

import CreatePost from './createPost'

import PageContainer from '../../components/pageContainer'
import PostLoading from '../../components/postLoading'
import LoadPostsButton from '../../components/loadPosts'
import Scroller from '../../components/infiniteScroller'

function Timeline() {
	const { auth: { token } } = useAuth()
	const { reloadPostsObserver } = useReloadPosts()
	const [isLoading, setIsLoading] = useState(true)
	const [postsList, setPostsList] = useState([])
	const [newPosts, setNewPosts] = useState([])
	const [numberOfNewPosts, setNumberOfNewPosts] = useState(0)
	const [offset, setOffset] = useState(0)
	const noPostsMessage = makeTimelinePostMessage(postsList)

	function handleFailGetPosts({ response: { status }}) {
		const msgStatus = {
			401: 'Access denied, please try to <a href=\'/\'>login</a> again!',
			500: 'Sorry, problems with our server. Refresh the page or try later, please 🥺'
		}
		const defaultMsg = 'An error occurred while trying to fetch the posts, please refresh the page 🥺'

		const msgToSend = msgStatus[status] || defaultMsg

		errorModal(msgToSend)
	}
	
	useEffect(() => {
		setIsLoading(true)
	
		api.getTimelinePosts(offset, token)
			.then(({ data }) => {
				return setPostsList(data)
			})
			.catch(handleFailGetPosts)
			.finally(() => setIsLoading(false))
	}, [token, reloadPostsObserver])

	useInterval(() => {
		console.log(offset)
		api.getTimelinePosts(0, token)
			.then(({data}) => {
				console.log('------', data)
				console.log(postsList)

				const equals = (data, postsList) => JSON.stringify(data) === JSON.stringify(postsList)
				if(!equals(data, postsList)){
					setNumberOfNewPosts(3)
					setNewPosts(data)
					
					
					const filteredPosts = data.filter(post => !postsList.includes(post) )
					console.log(filteredPosts)
				}else{
					setNumberOfNewPosts(0)
				}
			})
	}, 5000)


	return (
		<PageContainer title='timeline'>
			{ isLoading
				? <PostLoading />
				:
				<div>
					<CreatePost 						
						setOffset={setOffset}
						offset={offset} 
						setPostsList={setPostsList}
						setNumberOfNewPosts={setNumberOfNewPosts}
					/>
					{/* {numberOfNewPosts !== 0 && */}
					<LoadPostsButton 
						numberOfPosts={numberOfNewPosts}
						setPostsList={setPostsList}
						newPosts={newPosts}
						setNumberOfNewPosts={setNumberOfNewPosts}
					/>
					{/* } */}
					<Scroller 
						setOffset={setOffset}
						offset={offset} 
						setPostsList={setPostsList}
						postsList={postsList}
						noPostsMessage={noPostsMessage}
					/>
				</div>
			}
		</PageContainer>
	)
}


export default Timeline
