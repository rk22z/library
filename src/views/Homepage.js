import React, { useEffect, useState } from 'react'
import * as Styled from './HomepageStyled'


import { useSelector, useDispatch } from 'react-redux'
import {
    selectedTab,
    books,
    isModalOpen,
    openModal,
    closeModal,
    selectBook,
    handleModalType,
} from "../slices/adminSlice";
import { MODAL_TYPE } from '../constants/variables'


import BookCard from '../components/BookCard/BookCard'
import Modal from '../components/Modal/Modal'
import ModalContent from '../components/Modal/ModalContent/ModalContent'

const Homepage = () => {


    const dispatch = useDispatch()
    const isOpen = useSelector(isModalOpen)
    const booksList = useSelector(books)
    const tab = useSelector(selectedTab)
    const [booksArray, setBooksArray] = useState(booksList);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        const closeOnKeyPress = (event) => {
            if (event.key === 'Escape') {
                handleClose()
            }
        }
        window.addEventListener('keydown', closeOnKeyPress)
        return () => window.removeEventListener('keydown', closeOnKeyPress)
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setBooksArray(booksList);
        setSearchInput('')
    }, [booksList]);

    useEffect(() => {
        handleFilter();
        // eslint-disable-next-line
    }, [tab, searchInput]);

    const handleOpen = (book) => {
        dispatch(handleModalType(MODAL_TYPE.book))
        dispatch(selectBook(book))
        dispatch(openModal())
    }
    const handleClose = () => {
        dispatch(closeModal())
    }

    const handleFilter = () => {
        let filteredArray =
            searchInput?.length === 0
                ? [...booksList]
                : booksList.filter((book) => book.title.includes(searchInput)
                    || book.author.includes(searchInput)
                    || book.ISBN.includes(searchInput));
        switch (tab) {
            case "all":
                return setBooksArray(filteredArray);
            case "available":
                return setBooksArray(
                    filteredArray.filter((book) => book.available === true)
                );
            case "borrowed":
                return setBooksArray(
                    filteredArray.filter((book) => book.available === false)
                );
            default:
                break;
        }
    };

    return (
        <Styled.HomepageContainer>
            <Styled.HeaderContainer>
                <Styled.Count>{booksArray.length > 0 && `Results found: ${booksArray.length}`}</Styled.Count>
                <Styled.SearchBarWrapper>
                    <Styled.SearchBar
                        type='text'
                        onChange={(event) => setSearchInput(event.target.value)}
                        value={searchInput}
                        placeholder='Search...' />
                </Styled.SearchBarWrapper>
            </Styled.HeaderContainer>
            <Styled.ContentContainer>
                {booksArray?.map((book, index) => {
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