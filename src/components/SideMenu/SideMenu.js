import React from 'react'

import * as Styled from './SideMenuStyled'

import { setDisplayedBooks, books, displayedBooks, resetDisplayedBooks } from '../../slices/adminSlice'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button/Button'


const SideMenu = () => {

    const dispatch = useDispatch()
    const allBooks = useSelector(books)
    const allDBooks = useSelector(displayedBooks)

    const handleFilter = (status) => {
        dispatch(setDisplayedBooks(status))
    }

    const handleResetFilter = () => {
        dispatch(resetDisplayedBooks())
    }


    const handleClick = () => { }

    console.log('all books', allBooks)
    console.log('all displayed books', allDBooks)
    return (
        <Styled.SideMenuContainer>
            <Styled.TabsContainer>
                <Styled.TabWrapper>
                    <Button text='carti disponibile' btnStyle='tab' handleClick={() => handleFilter(true)} />
                </Styled.TabWrapper>
                <Styled.TabWrapper>
                    <Button text='carti imprumutate' btnStyle='tab' handleClick={() => handleFilter(false)} />
                </Styled.TabWrapper>
                <Styled.TabWrapper>
                    <Button text='toate cartile' btnStyle='tab' handleClick={handleResetFilter} />
                </Styled.TabWrapper>
            </Styled.TabsContainer>
            <Styled.ButtonWrapper>
                <Button text='raport carti' btnStyle='lightButton' handleClick={handleClick} />
            </Styled.ButtonWrapper>
        </Styled.SideMenuContainer>
    )
}

export default SideMenu