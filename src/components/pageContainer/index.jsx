import Trending from '../trending'
import Header from '../header'
import SearchBar from './searchBar'

import {
	Container,
	ContentContainer,
	FlexHeader,
	FlexContent,
	ProfilePicture,
	Title,
} from './styles'


function PageContainer({ children: pageContent, title, picture }) {

	return (
		<>
			<Header />

			<Container>
				<SearchBar />

				<ContentContainer>
					<FlexHeader>
						{picture && <ProfilePicture src={picture} />}

						<Title>{title}</Title>
					</FlexHeader>

					<FlexContent>
						{pageContent}
						
						{title !== undefined && <Trending/>}
					</FlexContent>
				</ContentContainer>
			</Container>
		</>
	)
}


export default PageContainer
