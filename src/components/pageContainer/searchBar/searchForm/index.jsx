import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'

import useAuth from '../../../../hooks/useAuth'

import { getUsers } from '../../../../services/api.users'

import { FormContainer, StyledDebounceInput, SearchButton } from './styles'


// const mockUserList = [
// 	{
// 		id: 1,
// 		username: 'Fulano 1',
// 		picture: 'https://i.pinimg.com/236x/2b/28/fe/2b28fe8c5638981cb73ee9b1b36706c1--train-your-dragon-food-networktrisha.jpg',
// 	},
// 	{
// 		id: 2,
// 		username: 'Fulano 2',
// 		picture: 'https://i.pinimg.com/236x/2b/28/fe/2b28fe8c5638981cb73ee9b1b36706c1--train-your-dragon-food-networktrisha.jpg',
// 	},
// 	{
// 		id: 3,
// 		username: 'Fulano 3',
// 		picture: 'https://i.pinimg.com/236x/2b/28/fe/2b28fe8c5638981cb73ee9b1b36706c1--train-your-dragon-food-networktrisha.jpg',
// 	},
// 	{
// 		id: 4,
// 		username: 'Fulano 4',
// 		picture: 'https://i.pinimg.com/236x/2b/28/fe/2b28fe8c5638981cb73ee9b1b36706c1--train-your-dragon-food-networktrisha.jpg',
// 	},
// 	{
// 		id: 5,
// 		username: 'Fulano 5',
// 		picture: 'https://i.pinimg.com/236x/2b/28/fe/2b28fe8c5638981cb73ee9b1b36706c1--train-your-dragon-food-networktrisha.jpg',
// 	},
// ]  // TODO: REMOVER
function SearchForm({ suggestions, setSuggestions, setIsSearching }) {
	const { auth: { token } } = useAuth()
	const [search, setSearch] = useState('')
	const navigate = useNavigate()

	function handleOutsideClick() {
		const TIME_TO_HOLD_CLICK_MS = 150
		setTimeout(() => setIsSearching(false), TIME_TO_HOLD_CLICK_MS)
	}

	useEffect(() => {
		if (search.length < 3 || search.includes('#')) return setSuggestions([])
		getUsers({ token, userName: search })
			.then(({ data }) => setSuggestions(data))
			// .finally(_ => setSuggestions(mockUserList))  // TODO: REMOVER
	}, [search])

	function searchHashtag() {
		const hashtag = search.replaceAll('#', '').replaceAll(' ', '')
		navigate(`/hashtag/${hashtag}`)
		setSearch('')
	}
	function searchUser() {
		navigate(`/user/${suggestions[0].id}`)
		setSearch('')
	}

	function handleSubmit(event) {
		event.preventDefault()

		const isHashtagSearch = search.includes('#')
		const isUserSearch = Boolean(suggestions[0])

		if (isHashtagSearch) return searchHashtag()
		if (isUserSearch) return searchUser()
	}
	
	return (
		<FormContainer onSubmit={handleSubmit} >
			<StyledDebounceInput
				placeholder='Search for people'
				type='text'
				onChange={({ target: { value }}) => setSearch(value)}
				value={search}
				onFocus={() => setIsSearching(true)}
				onBlur={handleOutsideClick}
				minLength={3}
				debounceTimeout={300}
			/>

			<SearchButton type='submit' >
				<IoSearch size={'21px'} color='#C6C6C6'/>
			</SearchButton>	
		</FormContainer>
	)
}


export default SearchForm
