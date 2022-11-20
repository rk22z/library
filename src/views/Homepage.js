import React, { useState } from 'react'
import * as Styled from './HomepageStyled'

import BookCard from '../components/BookCard/BookCard'
import Modal from '../components/Modal/Modal'
import ModalContent from '../components/Modal/ModalContent/ModalContent'
import { useSelector } from 'react-redux'
import { books } from '../slices/adminSlice'

const Homepage = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedBook, setSelectedBook] = useState(null)

    const handleOpen = (book) => {
        setSelectedBook(book);
        setIsOpen(true);
    }
    const handleClose = () => {
        setIsOpen(false);
    }

    // console.log('selbook', selectedBook)

    const books1 = [
        {
            title: 'prima',
            author: 'carte',
            price: '3',
            available: false,
        },
        {
            title: 'prima',
            author: 'carte',
            price: '3',
            available: false,
        },
        {
            title: 'prima',
            author: 'carte',
            price: '3',
            available: true,
        },
        {
            title: 'prima',
            author: 'carte',
            price: '3',
            available: false,
        },
        {
            title: 'prima',
            author: 'carte',
            price: '3',
            available: true,
        },


    ]

    const booksList = useSelector(books)

    return (
        <Styled.HomepageContainer>
            {booksList.map((book, index) => {
                return (
                    <Styled.BookWrapper key={index} onClick={() => handleOpen(book)}>
                        <BookCard title={book.title} author={book.author} price={book.price} available={book.available} ISBN={book.ISBN} />
                    </Styled.BookWrapper>)
            })}

            {isOpen && <Modal open={isOpen} handleClose={handleClose}>
                <ModalContent content={selectedBook} type='book' />
            </Modal>}
        </Styled.HomepageContainer>
    )
}

export default Homepage