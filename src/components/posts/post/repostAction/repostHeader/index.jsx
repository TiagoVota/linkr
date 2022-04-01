import { CgRepeat } from 'react-icons/cg'
import useAuth from '../../../../../hooks/useAuth'
import { RepostHeader } from './styles'


function RepostsHeader({userSharedName}) {
	const { auth: { authDetails: {username}  } } = useAuth()

	const boolean = userSharedName === username
	if(boolean){
		userSharedName = 'you'
	}

	return(
		<RepostHeader>
			<CgRepeat/>
			<p>
				{'Re-posted by '}<span>{userSharedName}</span>
			</p>
		</RepostHeader>
	)
}

export {RepostsHeader}