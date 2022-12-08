import React from 'react'
import { book, borrowBook, returnBook, closeModal } from '../../../../slices/adminSlice'
import { useSelector, useDispatch } from 'react-redux'
import { DATE_FORMAT } from '../../../../constants/variables'
import moment from 'moment/moment'
import Button from '../../../Button/Button'
import * as Styled from './BookContentStyled'

const BookContent = () => {

    const dispatch = useDispatch()
    const bookData = useSelector(book)

    let crtDate = moment('21-12-2022', DATE_FORMAT).format(DATE_FORMAT)
    // let crtDate = moment().format(DATE_FORMAT)



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
                delay = 'Cartea nu a fost returnata la timp. Penalizarea de 1%/zi va fi inclusa in pretul final.'
            } else {
                delay = 'Cartea nu are intarzieri inca.'

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
                    <Styled.Property>Titlu: </Styled.Property>
                    <Styled.Value>{bookData?.title}</Styled.Value>
                </Styled.LineWrapper>
                <Styled.LineWrapper>
                    <Styled.Property>Autor: </Styled.Property>
                    <Styled.Value>{bookData?.author}</Styled.Value>
                </Styled.LineWrapper>
                <Styled.LineWrapper>
                    <Styled.Property>ISBN: </Styled.Property>
                    <Styled.Value>{bookData?.ISBN}</Styled.Value>
                </Styled.LineWrapper>
                <Styled.LineWrapper>
                    <Styled.Property>Pret: </Styled.Property>
                    <Styled.Value>{bookData?.price} RON/zi</Styled.Value>
                </Styled.LineWrapper>
                {bookData.borrowDate && <Styled.LineWrapper>
                    <Styled.Property>Aceasta carte a fost imprumutata la data de: </Styled.Property>
                    <Styled.Value>{bookData?.borrowDate}</Styled.Value>
                </Styled.LineWrapper>}
                {bookData.maxReturnDate && <Styled.LineWrapper>
                    <Styled.Property>Aceasta carte trebuie returnata pana la data de  </Styled.Property>
                    <Styled.Value>{bookData.maxReturnDate} </Styled.Value>
                    <Styled.Property>pentru a evita penalizarile</Styled.Property>
                </Styled.LineWrapper>}

                {!bookData.available && <>
                    <Styled.LineWrapper>
                        <Styled.Property>{checkDelay()}</Styled.Property>
                    </Styled.LineWrapper>
                    <Styled.LineWrapper>
                        <Styled.Property>Pentru returnare trebuie achitata suma de </Styled.Property>
                        <Styled.Value>{checkPayment()}</Styled.Value>
                        <Styled.Property> RON</Styled.Property>
                    </Styled.LineWrapper>
                </>}
            </Styled.BookDetailsContainer>
            <Styled.ButtonWrapper>
                <Button
                    handleClick={bookData.available ? handleBorrow : handleReturn}
                    text={bookData.available ? 'Imprumuta' : 'Returneaza'}
                    btnStyle='lightButton'
                    disabled={false}
                />
            </Styled.ButtonWrapper>

        </Styled.BookContainer>
    )
}

export default BookContent