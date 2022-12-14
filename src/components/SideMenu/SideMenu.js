import React from 'react'

import * as Styled from './SideMenuStyled'

import { useDispatch, useSelector } from 'react-redux'
import { openModal, handleModalType, changeTab, selectedTab } from '../../slices/adminSlice';
import { MODAL_TYPE } from '../../constants/variables'

import Button from '../Button/Button'


const SideMenu = () => {

    const dispatch = useDispatch()
    const tab = useSelector(selectedTab)

    const handleFilter = (filter) => {
        dispatch(changeTab(filter))
    }

    const handleOpenReports = (type) => {
        dispatch(handleModalType(type))
        dispatch(openModal())
    }


    return (
        <Styled.SideMenuContainer>
            <Styled.TabsContainer>
                <Styled.TabWrapper>
                    <Button text='Available books'
                        btnStyle='tab'
                        selected={tab === 'available'}
                        handleClick={() => handleFilter('available')} />
                </Styled.TabWrapper>
                <Styled.TabWrapper>
                    <Button text='Borrowed books'
                        btnStyle='tab'
                        selected={tab === 'borrowed'}
                        handleClick={() => handleFilter('borrowed')} />
                </Styled.TabWrapper>
                <Styled.TabWrapper>
                    <Button text='All books'
                        btnStyle='tab'
                        selected={tab === 'all'}
                        handleClick={() => handleFilter('all')} />
                </Styled.TabWrapper>
            </Styled.TabsContainer>
            <Styled.ButtonWrapper>
                <Button text='Books situation'
                    btnStyle='lightButton'
                    handleClick={() => handleOpenReports(MODAL_TYPE.report)}
                    disabled={false} />
            </Styled.ButtonWrapper>
        </Styled.SideMenuContainer>
    )
}

export default SideMenu