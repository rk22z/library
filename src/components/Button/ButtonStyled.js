import styled, { css } from 'styled-components'
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from '../../constants/variables'

export const ButtonWrapper = styled.div`
width:100%;
height: 100%;
`

export const ButtonComponent = styled.button(({ btnStyle, selected, disabled }) => css`
 width:100%;
 height: 100%;
 border:none;
 
 ${btnStyle === 'tab' && css`
    border-radius:10px;
    background-color: ${COLORS.primaryGray}80;

    &:hover{
        cursor: pointer;
        background-color: ${COLORS.secondaryGray};
        }
    ${selected && css`
    background-color: ${COLORS.primaryGray};
    transform:scaleX(1.05);
    `}
`}
 ${btnStyle === 'lightButton' && css`
    border-radius:45px;
    background-color: ${disabled ? COLORS.secondaryGray : COLORS.primaryBlue};
    &:hover{
        cursor: ${disabled ? 'default' : 'pointer'};
        background-color: ${disabled ? COLORS.secondaryGray : COLORS.secondaryBlue};
        }
`}
 ${btnStyle === 'darkButton' && css`
    border-radius:45px;
    background-color: ${COLORS.primaryGray};
    &:hover{
        cursor: pointer;
        background-color: ${COLORS.secondaryGray};
        }
`}
`)

export const ButtonText = styled.span(({ btnStyle }) => css`
    font-family:${FONT_FAMILY.inter};
    font-size:18px;
    font-weight: ${FONT_WEIGHT.semibold};
    color:${COLORS.primaryWhite};
    text-transform: capitalize;
    ${btnStyle === 'tab' && css`
    `}
    ${btnStyle === 'lightButton' && css`
        color:${COLORS.primaryBlack};
    `}
    ${btnStyle === 'darkButton' && css`

    `}
`)