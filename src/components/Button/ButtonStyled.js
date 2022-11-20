import styled, { css } from 'styled-components'
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from '../../constants/variables'

export const ButtonWrapper = styled.div`
width:100%;
height: 100%;
/* background-color: red; */
`

export const ButtonComponent = styled.button(({ btnStyle }) => css`
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
`}
 ${btnStyle === 'lightButton' && css`
    border-radius:45px;
    background-color: ${COLORS.primaryBlue};
    &:hover{
        cursor: pointer;
        background-color: ${COLORS.secondaryBlue};
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