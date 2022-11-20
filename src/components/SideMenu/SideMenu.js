import React from 'react'

import * as Styled from './SideMenuStyled'

import Button from '../Button/Button'


const SideMenu = () => {

    const handleClick = () => {
        console.log('buton apasat')
    }

    return (
        <Styled.SideMenuContainer>
            <Styled.TabsContainer>
                <Styled.TabWrapper>
                    <Button text='carti disponibile' btnStyle='tab' handleClick={handleClick} />
                </Styled.TabWrapper>
                <Styled.TabWrapper>
                    <Button text='carti imprumutate' btnStyle='tab' handleClick={handleClick} />
                </Styled.TabWrapper>
                <Styled.TabWrapper>
                    <Button text='toate cartile' btnStyle='tab' handleClick={handleClick} />
                </Styled.TabWrapper>
            </Styled.TabsContainer>
            <Styled.ButtonWrapper>
                <Button text='raport carti' btnStyle='lightButton' handleClick={handleClick} />
            </Styled.ButtonWrapper>
        </Styled.SideMenuContainer>
    )
}

export default SideMenu