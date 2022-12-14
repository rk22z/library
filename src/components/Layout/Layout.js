import React from 'react'

import * as Styled from './LayoutStyled'

import Header from '../Header/Header'
import SideMenu from '../SideMenu/SideMenu'


const Layout = (props) => {
    const { children } = props

    return (
        <Styled.LayoutContainer>
            <Styled.HeaderWrapper><Header /></Styled.HeaderWrapper>
            <Styled.ContentContainer>
                <Styled.SideMenuWrapper><SideMenu /></Styled.SideMenuWrapper>
                <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
            </Styled.ContentContainer>
        </Styled.LayoutContainer>
    )
}

export default Layout