import { openInNewTab } from '../../../utils/openUrl'

import {
	Container,
	DescriptionText,
	InfoWrapper,
	LinkImg,
	LinkText,
	TitleText
} from './styles'


const LinkContent = ({ postInfo }) => {
	const { title,	description,	image, link } = postInfo

	function handleLinkContentClick() { openInNewTab(link) }
	
	return (
		<Container onClick={handleLinkContentClick}>
			<InfoWrapper>
				<TitleText>
					{title}
				</TitleText>

				<DescriptionText>
					{description}
				</DescriptionText>

				<LinkText>
					{link}
				</LinkText>
			</InfoWrapper>

			<LinkImg
				src={image}
				alt={`'${title}' link image`}
			/>
		</Container>
	)
}


export default LinkContent
