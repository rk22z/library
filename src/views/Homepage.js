import React, { useEffect, useState } from 'react'
import * as Styled from './HomepageStyled'

import BookCard from '../components/BookCard/BookCard'
import Modal from '../components/Modal/Modal'
import ModalContent from '../components/Modal/ModalContent/ModalContent'
import { useSelector, useDispatch } from 'react-redux'
import { selectedTab, books, isModalOpen, openModal, closeModal, selectBook, handleModalType } from '../slices/adminSlice'
import { MODAL_TYPE } from '../constants/variables'
import SearchBar from '../components/SearchBar/SearchBar'
import { useMemo } from 'react'

const Homepage = () => {


    const dispatch = useDispatch()
    const isOpen = useSelector(isModalOpen)
    const booksList = useSelector(books)
    const tab = useSelector(selectedTab)
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        const closeOnKeyPress = (event) => {
            if (event.key === 'Escape') {
                handleClose()
            }
        }
        window.addEventListener('keydown', closeOnKeyPress)
        return () => window.removeEventListener('keydown', closeOnKeyPress)
    }, [])


    const handleOpen = (book) => {
        dispatch(handleModalType(MODAL_TYPE.book))
        dispatch(selectBook(book))
        dispatch(openModal())
    }
    const handleClose = () => {
        dispatch(closeModal())
    }



    const filteredBook = (tab) => {

        let filteredArray = []
        switch (tab) {
            case 'all':
                filteredArray = [...booksList]
                return filteredArray
            case 'available':
                filteredArray = booksList.filter((book) => book.available === true)
                return filteredArray
            case 'borrowed':
                filteredArray = booksList.filter((book) => book.available === false)
                return filteredArray
            default:
                break;
        }

        // return filteredArray
    }

    return (
        <Styled.HomepageContainer>
            <Styled.HeaderContainer>
                <Styled.Count>{filteredBook(tab).length > 0 && `Rezultate gasite: ${filteredBook(tab).length}`}</Styled.Count>
                <Styled.SearchBar><SearchBar books={booksList} setSearchResult={setSearchResult} /></Styled.SearchBar>
            </Styled.HeaderContainer>
            <Styled.ContentContainer>
                {filteredBook(tab)?.map((book, index) => {
                    const { title, author, price, available, ISBN } = book
                    return (
                        <Styled.BookWrapper key={index} onClick={() => handleOpen(book)}>
                            <BookCard title={title} author={author} price={price} available={available} ISBN={ISBN} />
                        </Styled.BookWrapper>)
                })}
            </Styled.ContentContainer>

            {isOpen && <Modal open={isOpen} handleClose={handleClose}>
                <ModalContent />
            </Modal>}
        </Styled.HomepageContainer>
    )
}

export default Homepage