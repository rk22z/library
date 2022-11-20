import React from 'react'

import * as Styled from './ButtonStyled'

const Button = (props) => {
    const { text = '', btnStyle = 'button', handleClick = () => { } } = props

    return (
        <Styled.ButtonWrapper>
            <Styled.ButtonComponent btnStyle={btnStyle} onClick={handleClick}>
                <Styled.ButtonText btnStyle={btnStyle}>{text}</Styled.ButtonText>
            </Styled.ButtonComponent>
        </Styled.ButtonWrapper>
    )
}

export default Button