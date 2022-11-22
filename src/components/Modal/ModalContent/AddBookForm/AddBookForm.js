import React, { useState } from 'react'
import * as Styled from './AddBookFormStyled'
import { useSelector, useDispatch } from 'react-redux'
import { book, addBook, closeModal, books } from '../../../../slices/adminSlice'


const AddBookForm = (props) => {
    const { type = '' } = props;

    const dispatch = useDispatch()
    const bookData = useSelector(book)
    const booksData = useSelector(books)

    const [data, setData] = useState(bookData)


    const handleChange = (event) => {
        setData(data => ({
            ...data,
            [event.target.name]: event.target.value, id: booksData.length + 1
        }))
    }

    const handleAdd = (data) => {
        dispatch(addBook(data))
        dispatch(closeModal())
    }
    // console.log('bksmodal', booksData)
    return (
        <Styled.AddFormContainer>
            <Styled.AddFormInputWrapper content={type}>
                <Styled.AddFormLabel content={type}>Book title</Styled.AddFormLabel>
                <Styled.AddFormInput type='text' content={type} name='title' onChange={(event) => handleChange(event)} />
            </Styled.AddFormInputWrapper>
            <Styled.AddFormInputWrapper content={type}>
                <Styled.AddFormLabel content={type}>Author</Styled.AddFormLabel>
                <Styled.AddFormInput type='text' content={type} name='author' onChange={(event) => handleChange(event)} />
            </Styled.AddFormInputWrapper>
            <Styled.AddFormInputWrapper content={type}>
                <Styled.AddFormLabel content={type}>Price</Styled.AddFormLabel>
                <Styled.AddFormInput type='number' content={type} name='price' onChange={(event) => handleChange(event)} />
            </Styled.AddFormInputWrapper>
            <Styled.AddFormInputWrapper content={type}>
                <Styled.AddFormLabel content={type}>ISBN</Styled.AddFormLabel>
                <Styled.AddFormInput type='number' content={type} name='ISBN' onChange={(event) => handleChange(event)} />
            </Styled.AddFormInputWrapper>
            <button onClick={() => handleAdd(data)}>adauga</button>
        </Styled.AddFormContainer>
    )
}

export default AddBookForm