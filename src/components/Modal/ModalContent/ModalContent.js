import React from 'react'
import AddBookForm from './AddBookForm/AddBookForm'

import * as Styled from './ModalContentStyled'
import { useDispatch } from 'react-redux'
import { borrowBook } from '../../../slices/adminSlice'

const ModalContent = (props) => {
    const { content, type } = props

    const dispatch = useDispatch()

    const handleBorrow = () => {
        dispatch(borrowBook())
    }

    const renderModalContent = () => {
        switch (type) {
            case 'book':
                return (
                    <div>
                        {content?.title} {content?.author} {content?.available ? 'dispo' : 'indispo'}
                        <button onClick={handleBorrow}>imprumuta</button>
                    </div>
                )
            case 'borrow':
                return (
                    <div>
                        {type}
                    </div>)
            case 'add':
                return (
                    <AddBookForm type={type} />
                )
            case 'return':
                return (
                    <div>
                        {type}
                    </div>)
            default:
                return (
                    <div>
                        No content to display
                    </div>
                )

        }
    }

    console.log('content', content)
    console.log('type', type)

    return (
        <Styled.ModalContainer>
            {renderModalContent()}
        </Styled.ModalContainer>
    )
}

export default ModalContent