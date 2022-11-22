import React, { useEffect, useState } from 'react'
import * as Styled from './HomepageStyled'

import BookCard from '../components/BookCard/BookCard'
import Modal from '../components/Modal/Modal'
import ModalContent from '../components/Modal/ModalContent/ModalContent'
import { useSelector, useDispatch } from 'react-redux'
import { displayedBooks, book, modalType, isModalOpen, openModal, closeModal, selectBook, handleModalType } from '../slices/adminSlice'
import { MODAL_TYPE } from '../constants/variables'

const Homepage = () => {


    const dispatch = useDispatch()
    const isOpen = useSelector(isModalOpen)
    const bookData = useSelector(book)
    const booksList = useSelector(displayedBooks)
    const type = useSelector(modalType)



    const handleOpen = (book) => {
        dispatch(handleModalType(MODAL_TYPE.book))
        dispatch(selectBook(book))
        dispatch(openModal())
    }
    const handleClose = () => {
        dispatch(closeModal())
    }



    return (
        <Styled.HomepageContainer>
            {booksList?.map((book, index) => {
                return (
                    <Styled.BookWrapper key={index} onClick={() => handleOpen(book)}>
                        <BookCard title={book.title} author={book.author} price={book.price} available={book.available} ISBN={book.ISBN} />
                    </Styled.BookWrapper>)
            })}

            {isOpen && <Modal open={isOpen} handleClose={handleClose}>
                <ModalContent content={bookData} type={type} />
            </Modal>}
        </Styled.HomepageContainer>
    )
}

export default Homepage