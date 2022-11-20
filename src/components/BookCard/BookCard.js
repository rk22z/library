import React from 'react'

import * as Styled from './BookCardStyled'

import bookIcon from '../../assets/bookIcon.svg'

const BookCard = (props) => {
    const { title = '', author = '', price = '', available = false, ISBN = 0 } = props;


    return (
        <Styled.BookCardContainer>
            <Styled.BookCardIconWrapper >
                <Styled.BookCardIcon src={bookIcon} />
            </Styled.BookCardIconWrapper>
            <Styled.BookCardTextWrapper>
                <Styled.BookCardText type='ISBN'>{ISBN}</Styled.BookCardText>
                <Styled.BookCardText type='title'>{title}</Styled.BookCardText>
                <Styled.BookCardText type='author'>{author}</Styled.BookCardText>
                <Styled.BookCardText type='price'>{price}RON/zi</Styled.BookCardText>
                <Styled.BookCardText type='available' available={available}>{available ? 'disponibila' : 'imprumutata'}</Styled.BookCardText>
            </Styled.BookCardTextWrapper>
        </Styled.BookCardContainer>
    )
}

export default BookCard