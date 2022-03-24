import { useEffect, useState } from 'react'

import LoaderSpinner from '../loaderSpinner'

import { Container } from './styles'


const PostLoading = () => {
	const [loadingMsg, setLoadingMsg] = useState('Loading')
	const [count, setCount] = useState(1)
	const MS_TO_SEC = 1000
	const len = 'Loading'.length

	const updateLoading = () => {
		setLoadingMsg('Loading'.padEnd(len + count % 4, '.'))
		setCount(count + 1)
	}

	useEffect(() => {
		const timer = setTimeout(updateLoading, 0.75 * MS_TO_SEC)
		return () => clearTimeout(timer)
	}, [count])

	return (
		<Container>
			<p>{loadingMsg}</p>
			<LoaderSpinner type='BallTriangle'/>	
		</Container>
	)
}


export default PostLoading
