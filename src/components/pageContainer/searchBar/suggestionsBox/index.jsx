import NoSuggestion from './noSuggestion'
import SuggestionBox from './suggestionBox'

import { Container } from './styles'


function SuggestionsBox({ suggestions, isHidden }) {
	return (
		<Container isHidden={isHidden} >
			{ suggestions.length === 0
				? <NoSuggestion />
				: suggestions.map((user) => <SuggestionBox
					key={user.id}
					userInfo={user}
				/>)
			}
		</Container>
	)
}


export default SuggestionsBox
