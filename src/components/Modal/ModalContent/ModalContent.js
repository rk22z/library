import React from 'react'

import * as Styled from './ModalContentStyled'

import { MODAL_TYPE } from '../../../constants/variables'
import { useSelector } from 'react-redux'
import { modalType } from '../../../slices/adminSlice'

import BookContent from './BookContent/BookContent'
import ReportContent from './ReportContent/ReportContent'
import AddBookForm from './AddBookForm/AddBookForm'

const ModalContent = () => {
    const type = useSelector(modalType)

    const renderModalContent = () => {
        switch (type) {
            case MODAL_TYPE.book:
                return (
                    <BookContent />
                )

            case MODAL_TYPE.add:
                return (
                    <AddBookForm />
                )

            case MODAL_TYPE.report:
                return (
                    <ReportContent />
                )

            default:
                return (
                    <Styled.NoContentText>
                        An issue has occurred, please try reloading the page.
                    </Styled.NoContentText>
                )

        }
    }


    return (
        <Styled.ModalContainer>
            {renderModalContent()}
        </Styled.ModalContainer>
    )
}

export default ModalContent