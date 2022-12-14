import React, { useState, useEffect } from 'react'
import * as Styled from './AddBookFormStyled'
import { useSelector, useDispatch } from 'react-redux'
import { book, addBook, closeModal, books } from '../../../../slices/adminSlice'
import Button from '../../../Button/Button'


const AddBookForm = () => {
    const dispatch = useDispatch()
    const bookData = useSelector(book)
    const booksData = useSelector(books)

    const [data, setData] = useState(bookData)
    const [disable, setDisable] = useState(true)

    useEffect(() => {
        if (data?.title.length > 0
            && data?.author.length > 0
            && data?.price.length > 0
            && data?.ISBN.length === 13
        ) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [data])


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

    return (
        <Styled.AddFormContainer>
            <Styled.AddFormInputWrapper >
                <Styled.AddFormLabel >Book title</Styled.AddFormLabel>
                <Styled.AddFormInput
                    type='text'
                    name='title'
                    onChange={(event) => handleChange(event)}
                    placeholder='Title'
                />
            </Styled.AddFormInputWrapper>
            <Styled.AddFormInputWrapper >
                <Styled.AddFormLabel >Author</Styled.AddFormLabel>
                <Styled.AddFormInput
                    type='text'
                    name='author'
                    onChange={(event) => handleChange(event)}
                    placeholder='Author'
                />
            </Styled.AddFormInputWrapper>
            <Styled.AddFormInputWrapper >
                <Styled.AddFormLabel >Price</Styled.AddFormLabel>
                <Styled.AddFormInput
                    type='number'
                    name='price'
                    onChange={(event) => handleChange(event)}
                    placeholder='Price'
                />
            </Styled.AddFormInputWrapper>
            <Styled.AddFormInputWrapper >
                <Styled.AddFormLabel >ISBN</Styled.AddFormLabel>
                <Styled.AddFormInput
                    type='number'
                    name='ISBN'
                    onChange={(event) => handleChange(event)}
                    placeholder='ISBN (13 digits)'
                />
            </Styled.AddFormInputWrapper>
            <Styled.ButtonWrapper>
                <Button
                    text='Add'
                    btnStyle='lightButton'
                    handleClick={() => handleAdd(data)}
                    disabled={disable}
                />
            </Styled.ButtonWrapper>
        </Styled.AddFormContainer>
    )
}

export default AddBookForm