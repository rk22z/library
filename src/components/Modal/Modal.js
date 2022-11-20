import React from 'react'
import ReactDOM from 'react-dom'

import * as Styled from './ModalStyled'

const Modal = (props) => {
    const { children, open = false, handleClose = () => { } } = props

    return ReactDOM.createPortal(
        <Styled.ModalBackdrop onClick={handleClose}>
            <Styled.ModalContainer onClick={(event) => event.stopPropagation()}>
                {children}
            </Styled.ModalContainer>
        </Styled.ModalBackdrop>,
        document.getElementById('root'),
    )
}

export default Modal