import { useEffect, useState } from 'react'
import { CgRepeat } from 'react-icons/cg'

import { confirmModal, errorModal } from '../../../../../factories/modalFactory'
import useAuth from '../../../../../hooks/useAuth'
import useReloadPosts from '../../../../../hooks/useReloadPosts'

import api from '../../../../../services/api.post'

import { Container } from './styles'

function RepostContent({ postId }) {
	const body = {postId}
	const { auth: { token } } = useAuth()
	const { warnReloadPosts } = useReloadPosts()
	const [countRepost, setCountRepost] = useState()
	const [reload, setReload] = useState(false)

	useEffect(() => {
		getNumberRepost()
	}, [reload])

	function getNumberRepost() {
		api.numberRepost(postId, token)
			.then(({ data }) => {
				setCountRepost(data)
			})
			.catch((error) => {
				errorModal(error)
			})
	}

	function verifyRepost(e) {
		e.preventDefault()
		handleReload()
		api.existingRepost(postId, token)
			.then(({ data }) => {
				if(!data) {
					confirmModal('Do you want to re-post this link?',
						'Yes, share!', 'No, cancel')
						.then((result) => {
							if(result.isConfirmed) {
								api.createRepost(body, token)
									.then(() => {
										warnReloadPosts()
									})
									.catch ((error) => {
										errorModal(error)
									})
							} else if (result.isDenied) return
						})
				} else (
					confirmModal('This link is already re-post, Do you want to delete it?',
						'Yes, delete!', 'No, cancel')
						.then((result) => {
							if(result.isConfirmed) {
								api.deleteRepost(postId, token)
									.then(() => {
										warnReloadPosts()
									})
									.catch((error) => {
										errorModal(error)
									})
							} else if (result.isDenied) return
						})
				)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	function handleReload() {
		setReload(!reload)
	}

	return(
		<Container onClick={(e) => {
			verifyRepost(e)
		}}>
			<CgRepeat
				color='#FFFFFF'
				size='26px'
			/>
			<p>
				<span>{countRepost} </span>{countRepost === 1 ? 're-post' : 're-posts'}
			</p>
		</Container>
	)
}

export default RepostContent