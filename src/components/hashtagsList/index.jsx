import { Container, Hashtag, List } from './style'
import { removeHashtag } from '../../utils/strManipulate'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api.hashtags'
import useAuth from '../../hooks/useAuth'


function HashtagsList(){
	const navigate = useNavigate()
	const { auth: { token } } = useAuth()
	const [hashtags, setHashtags] = useState([])

	useEffect(() => {
		let isMounted = true
		const promise = api.getHashtags(token)

		promise.then((response) => {
			if (isMounted)
				setHashtags(response.data)
		})
		return () => { isMounted = false }
	}, [hashtags])
	

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

export default HashtagsList