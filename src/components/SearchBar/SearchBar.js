import React from 'react'
import * as Styled from './SearchBarStyled'

const SearchBar = (props) => {
    const { books = [], setSearchResult = () => { } } = props

    const handleSearchChange = (event) => {
        if (!event.target.value.length > 0) return setSearchResult(books)

        const resultsArray = books.filter(book => book?.title.includes(event.target.value)
            || book?.author.includes(event.target.value)
            || book?.ISBN.includes(event.target.value))
        setSearchResult(resultsArray)
    }

    return (
        <div>
            <input type='text' onChange={handleSearchChange} />
        </div>
    )
}

export default SearchBar