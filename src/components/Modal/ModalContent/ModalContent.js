import React from 'react'
import AddBookForm from './AddBookForm/AddBookForm'

import * as Styled from './ModalContentStyled'
import { useSelector } from 'react-redux'
import { modalType } from '../../../slices/adminSlice'
import BookContent from './BookContent/BookContent'
import ReportContent from './ReportContent/ReportContent'
import { MODAL_TYPE } from '../../../constants/variables'

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
                        A aparut o eroare, va rugam reincarcati pagina
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