import Header from '../header'

import { Container, ContentContainer, Flex, ProfilePicture, Title } from './styles'


function PageContainer({ children: pageContent, title, picture }) {

	return (
		<>
			<Header />

			<Container>
				<ContentContainer>
					<Flex>
						{picture && <ProfilePicture src={picture} />}
						<Title>{title}</Title>
					</Flex>
					{/*
						TODO: REMOVER DEPOIS
						Galera, explicação de como usar esse page Container:
						Ele vai receber como propriedade o título da página (ex.: timeline,
						Fulano's Posts, ...) e o conteúdo que é para estar dentro desse
						component é relacionado com o que vai aparecer no conteúdo da page
						(ex.: posts, postCreation, trending, ...).
						Além disso, esse componente já é feito para ter o tamanho certo da
						página, então a moral é que, é só fazer uma cópia da timeline e
						fazer as alterações pertinentes (mudar a lista de post que vai
						aparecer, colocar o menu de post creation). Qualquer coisa só fala
						comigo [Tiago].
					*/}

					{pageContent}
				</ContentContainer>
			</Container>
		</>
	)
}


export default PageContainer