import React from 'react'

import * as Styled from './BookContentStyled'

import { book, borrowBook, returnBook, closeModal } from '../../../../slices/adminSlice'
import { useSelector, useDispatch } from 'react-redux'
import { DATE_FORMAT } from '../../../../constants/variables'
import moment from 'moment'

import Button from '../../../Button/Button'

const BookContent = () => {

    const dispatch = useDispatch()
    const bookData = useSelector(book)

    //* to simulate future date for fees calculation uncomment the following line and change the date in '' as you wish
    // let crtDate = moment('21-12-2022', DATE_FORMAT).format(DATE_FORMAT)

    //* to simulate future date comment the following line in order to use the previous date
    let crtDate = moment().format(DATE_FORMAT)


    const handleBorrow = () => {
        dispatch(borrowBook())
        dispatch(closeModal())
    }
    const handleReturn = () => {
        dispatch(returnBook())
        dispatch(closeModal())
    }

    const checkDelay = () => {
        let delay = '';
        if (!bookData.available) {
            if (moment(crtDate, DATE_FORMAT).isAfter(moment(bookData.maxReturnDate, DATE_FORMAT))) {
                delay = 'The book has not been returned on time. The 1% penalty fee will be added to the final price.'
            } else {
                delay = 'There are no delays.'
            }
        }

        return delay
    }

    const checkPayment = () => {
        let sum = 0;
        if (!bookData.available) {
            sum = sum + moment(crtDate, DATE_FORMAT).diff(moment(bookData.borrowDate, DATE_FORMAT), 'days') * bookData.price
        }
        if (moment(crtDate, DATE_FORMAT).isAfter(moment(bookData.maxReturnDate, DATE_FORMAT))) {
            sum = sum + moment(crtDate, DATE_FORMAT).diff(moment(bookData.maxReturnDate, DATE_FORMAT), 'days') * bookData.price / 100
        }

        return sum
    }

    return (
        <Styled.BookContainer>
            <Styled.BookDetailsContainer>
                <Styled.LineWrapper>
                    <Styled.Property>Title: </Styled.Property>
                    <Styled.Value>{bookData?.title}</Styled.Value>
                </Styled.LineWrapper>
                <Styled.LineWrapper>
                    <Styled.Property>Author: </Styled.Property>
                    <Styled.Value>{bookData?.author}</Styled.Value>
                </Styled.LineWrapper>
                <Styled.LineWrapper>
                    <Styled.Property>ISBN: </Styled.Property>
                    <Styled.Value>{bookData?.ISBN}</Styled.Value>
                </Styled.LineWrapper>
                <Styled.LineWrapper>
                    <Styled.Property>Price: </Styled.Property>
                    <Styled.Value>{bookData?.price} RON/zi</Styled.Value>
                </Styled.LineWrapper>
                {bookData.borrowDate && <Styled.LineWrapper>
                    <Styled.Property>This book was borrowed on: </Styled.Property>
                    <Styled.Value>{bookData?.borrowDate}</Styled.Value>
                </Styled.LineWrapper>}
                {bookData.maxReturnDate && <Styled.LineWrapper>
                    <Styled.Property>This book has to be returned until  </Styled.Property>
                    <Styled.Value>{bookData.maxReturnDate} </Styled.Value>
                    <Styled.Property>in order to avoid penalty fees.</Styled.Property>
                </Styled.LineWrapper>}

                {!bookData.available && <>
                    <Styled.LineWrapper>
                        <Styled.Property>{checkDelay()}</Styled.Property>
                    </Styled.LineWrapper>
                    <Styled.LineWrapper>
                        <Styled.Property>To return this book the following amount has to be paid: </Styled.Property>
                        <Styled.Value>{checkPayment()}</Styled.Value>
                        <Styled.Property> RON</Styled.Property>
                    </Styled.LineWrapper>
                </>}
            </Styled.BookDetailsContainer>
            <Styled.ButtonWrapper>
                <Button
                    handleClick={bookData.available ? handleBorrow : handleReturn}
                    text={bookData.available ? 'Borrow' : 'Return'}
                    btnStyle='lightButton'
                    disabled={false}
                />
            </Styled.ButtonWrapper>

        </Styled.BookContainer>
    )
}

export default BookContent