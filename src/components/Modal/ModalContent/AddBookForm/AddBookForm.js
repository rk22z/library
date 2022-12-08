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
            // && data?.ISBN.length === 1
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
                <Styled.AddFormLabel >Titlu carte</Styled.AddFormLabel>
                <Styled.AddFormInput
                    type='text'
                    name='title'
                    onChange={(event) => handleChange(event)} />
            </Styled.AddFormInputWrapper>
            <Styled.AddFormInputWrapper >
                <Styled.AddFormLabel >Autor</Styled.AddFormLabel>
                <Styled.AddFormInput
                    type='text'
                    name='author'
                    onChange={(event) => handleChange(event)} />
            </Styled.AddFormInputWrapper>
            <Styled.AddFormInputWrapper >
                <Styled.AddFormLabel >Pret</Styled.AddFormLabel>
                <Styled.AddFormInput
                    type='number'
                    name='price'
                    onChange={(event) => handleChange(event)} />
            </Styled.AddFormInputWrapper>
            <Styled.AddFormInputWrapper >
                <Styled.AddFormLabel >ISBN</Styled.AddFormLabel>
                <Styled.AddFormInput
                    type='number'
                    name='ISBN'
                    onChange={(event) => handleChange(event)} />
            </Styled.AddFormInputWrapper>
            <Styled.ButtonWrapper>
                <Button
                    text='Adauga'
                    btnStyle='lightButton'
                    handleClick={() => handleAdd(data)}
                    disabled={disable}
                />
            </Styled.ButtonWrapper>
        </Styled.AddFormContainer>
    )
}

export default AddBookForm