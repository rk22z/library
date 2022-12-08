import React from 'react'

import * as Styled from './ButtonStyled'

const Button = (props) => {
    const { text = '', btnStyle = 'darkButton', handleClick = () => { }, selected = false, disabled = false } = props

    return (
        <Styled.ButtonWrapper>
            <Styled.ButtonComponent btnStyle={btnStyle} onClick={handleClick} selected={selected} disabled={disabled}>
                <Styled.ButtonText btnStyle={btnStyle}>{text}</Styled.ButtonText>
            </Styled.ButtonComponent>
        </Styled.ButtonWrapper>
    )
}

export default Button