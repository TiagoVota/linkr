import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'
import useReloadPosts from '../../hooks/useReloadPosts'

import api from '../../services/api.hashtags'
import { removeHashtag } from '../../utils/strManipulate'

import { Container, Hashtag, List } from './style'


function Trending(){
	const navigate = useNavigate()
	const { auth: { token } } = useAuth()
	const { reloadPostsObserver } = useReloadPosts()
	const [hashtags, setHashtags] = useState([])

	useEffect(() => {
		const promise = api.getHashtags(token)

		promise.then((response) => {
			setHashtags(response.data)
		})
	}, [token, reloadPostsObserver])
	

	return (
		<Container>
			<h1>trending</h1>
			<List>
				{hashtags.map(tag => (
					<Hashtag onClick={() => navigate(`/hashtag/${removeHashtag(tag.name)}`)} key={tag.id}>
						{`# ${tag.name}`}
					</Hashtag>
				))}
			</List>
		</Container>
	)
}

export default Trending
