import React, { useState } from 'react'

import * as Styled from './HeaderStyled';

import logo from '../../assets/logo.svg';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import ModalContent from '../Modal/ModalContent/ModalContent';
import { useDispatch, useSelector } from 'react-redux';
import { isModalOpen, openModal, closeModal, handleModalType, modalType } from '../../slices/adminSlice';
import { MODAL_TYPE } from '../../constants/variables'


const Header = () => {

    // const [isOpen, setIsOpen] = useState(false)
    // const [action, setAction] = useState('')

    const dispatch = useDispatch()
    const isOpen = useSelector(isModalOpen)
    const type = useSelector(modalType)

    const handleOpen = (action) => {
        dispatch(handleModalType(action))
        dispatch(openModal())
    }
    const handleClose = () => {
        dispatch(closeModal())
    }



    return (
        <Styled.HeaderContainer>
            <Styled.LogoContainer>
                <Styled.Logo src={logo} />
            </Styled.LogoContainer>
            <Styled.ButtonsContainer>
                <Styled.ButtonWrapper>
                    <Button text='imprumuta' btnStyle='darkButton' handleClick={() => handleOpen('borrow')} />
                </Styled.ButtonWrapper>
                <Styled.ButtonWrapper>
                    <Button text='returneaza' btnStyle='darkButton' handleClick={() => handleOpen('return')} />
                </Styled.ButtonWrapper>
                <Styled.ButtonWrapper>
                    <Button text='adauga carte' btnStyle='darkButton' handleClick={() => handleOpen('add')} />
                </Styled.ButtonWrapper>
            </Styled.ButtonsContainer>
            {isOpen && <Modal open={isOpen} handleClose={handleClose}>
                <ModalContent type={type} />
            </Modal>}
        </Styled.HeaderContainer>
    )
}

export default Header