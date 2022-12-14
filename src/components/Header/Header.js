import React from 'react'

import * as Styled from './HeaderStyled';

import { useDispatch } from 'react-redux';
import { openModal, handleModalType, } from '../../slices/adminSlice';
import { MODAL_TYPE } from '../../constants/variables'

import logo from '../../assets/logo.svg';
import Button from '../Button/Button';



const Header = () => {
    const dispatch = useDispatch()

    const handleOpen = (type) => {
        dispatch(handleModalType(type))
        dispatch(openModal())
    }

    return (
        <Styled.HeaderContainer>
            <Styled.LogoContainer>
                <Styled.Logo src={logo} />
            </Styled.LogoContainer>
            <Styled.ButtonsContainer>
                <Styled.ButtonWrapper>
                    <Button
                        text='add book'
                        btnStyle='darkButton'
                        handleClick={() => handleOpen(MODAL_TYPE.add)} />
                </Styled.ButtonWrapper>
            </Styled.ButtonsContainer>
        </Styled.HeaderContainer>
    )
}

export default Header