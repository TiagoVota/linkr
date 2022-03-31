import { useState } from 'react'

import useAuth from '../../../../hooks/useAuth'
import useReloadPosts from '../../../../hooks/useReloadPosts'

import api from '../../../../services/api.post'
import { confirmModal, errorModal } from '../../../../factories/modalFactory'

import { IoTrashOutline } from 'react-icons/io5'
import { ContainerDelete} from './styles.js'


function DeleteContainer ({postId}) {
	const { auth: { token } } = useAuth()
	const { warnReloadPosts } = useReloadPosts()
	const [isLoading, setIsLoading] = useState()

	function handleDelete() {
		confirmModal('Are you sure you want to delete this post?',
			'Yes, delete it', 'No, go back')
			.then((result) => {
				if(result.isConfirmed){
					setIsLoading(true)
					api.sendDeletePostRequest(postId, token)
						.then(() => {
							setIsLoading(false)
							warnReloadPosts()
							// window.location.reload()
						})
						.catch(() => {
							setIsLoading(false)
							errorModal()
						})
				} else if (result.isDenied){
					return
				}
			})
	}

	return (
		<ContainerDelete>
			<IoTrashOutline
				onClick={() => {handleDelete()}}
				color={'#FFFFFF'}
				height='20px'
				width='20px'
				style={{cursor: 'pointer'}}
				disabled={isLoading}
			/>
		</ContainerDelete>
	)
}

export default DeleteContainer
