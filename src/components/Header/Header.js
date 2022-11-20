import React, { useState } from 'react'

import * as Styled from './HeaderStyled';

import logo from '../../assets/logo.svg';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import ModalContent from '../Modal/ModalContent/ModalContent';
import { useDispatch } from 'react-redux';
import { addBook } from '../../slices/adminSlice';


const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [action, setAction] = useState('')

    const dispatch = useDispatch()
    const bk = {
        id: 0,
        title: 'mizerabilii',
        author: 'alexandre dumas',
        ISBN: 1257,
        price: 12,
        available: true,
    }


    const handleOpen = (action) => {
        // setSelectedBook(book);
        setAction(action)
        setIsOpen(true);
    }
    const handleClose = () => {
        setIsOpen(false);
    }

    const handleAdd = () => {
        dispatch(addBook(bk))
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
                    <Button text='adauga carte' btnStyle='darkButton' handleClick={handleAdd} />
                </Styled.ButtonWrapper>
            </Styled.ButtonsContainer>
            {isOpen && <Modal open={isOpen} handleClose={handleClose}>
                <ModalContent type={action} />
            </Modal>}
        </Styled.HeaderContainer>
    )
}

export default Header