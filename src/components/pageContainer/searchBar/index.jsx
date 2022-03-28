import { useState } from 'react'

import SearchForm from './searchForm'
import SuggestionsBox from './suggestionsBox'

import { Container } from './styles'


function SearchBar() {
	const [suggestions, setSuggestions] = useState([])
	const [isSearching, setIsSearching] = useState(false)
	
	return (
		<Container>
			<SearchForm
				suggestions={suggestions}
				setSuggestions={setSuggestions}
				setIsSearching={setIsSearching}
			/>

			<SuggestionsBox suggestions={suggestions} isHidden={!isSearching} />
		</Container>
	)
}


export default SearchBar
