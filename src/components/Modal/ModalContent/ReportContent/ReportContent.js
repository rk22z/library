import React from 'react'
import * as Styled from './ReportContentStyled'
import { useSelector } from 'react-redux'
import { books } from '../../../../slices/adminSlice'

const ReportContent = () => {

    const booksData = useSelector(books)

    let availableBooks = booksData?.filter((book) => book.available === true).length
    let borrowedBooks = booksData?.filter((book) => book.available === false).length

    return (
        <Styled.ReportContainer>
            <Styled.LineWrapper>
                <Styled.Property>Carti totale: </Styled.Property>
                <Styled.Value>{booksData.length}</Styled.Value>
            </Styled.LineWrapper>
            <Styled.LineWrapper>
                <Styled.Property>Carti disponibile: </Styled.Property>
                <Styled.Value>{availableBooks}</Styled.Value>
            </Styled.LineWrapper>
            <Styled.LineWrapper>
                <Styled.Property>Carti imprumutate: </Styled.Property>
                <Styled.Value>{borrowedBooks}</Styled.Value>
            </Styled.LineWrapper>
        </Styled.ReportContainer>
    )
}

export default ReportContent