import styled, { css } from 'styled-components'
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from '../../constants/variables'

export const BookCardContainer = styled.div`
width:100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding:20px 0 0 0 ;

&:hover{
    cursor: pointer;
    background-color: ${COLORS.primaryWhite}10;
}

`

export const BookCardIconWrapper = styled.div`
width:65%;
`

export const BookCardIcon = styled.img`
filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(348deg) brightness(106%) contrast(99%);
opacity: .7;


`

export const BookCardTextWrapper = styled.div`
width:100%;
display: flex;
flex-direction: column;
justify-content: center;

 &::after{
    content:'';
    width: 45%;
    height:2px;
    background: linear-gradient(90deg, rgba(254,254,254,0.05) 0%, rgba(254,254,254,0.25) 25%, rgba(254,254,254,0.5) 50%, rgba(254,254,254,0.25) 75%, rgba(254,254,254,0.05) 100%);    
    margin:8px auto 0 auto;
    border-radius: 50%;
 }
`

export const BookCardText = styled.span(({ type, available }) => css`
font-family:${FONT_FAMILY.inter};
color:${COLORS.primaryWhite};
text-align:center;
cursor:text;

    ${type === 'title' && css`
    font-size: 20px;
    `}
    ${type === 'author' && css`
    font-size:16px;
    `}
    ${type === 'price' && css`
    font-size:18px;
    `}
    ${type === 'available' && css`
    font-size:18px;
    font-weight: ${FONT_WEIGHT.bold};
    text-transform: uppercase;
        ${available ? css`
        color:#7dff5cd5;
        `: css`
        color:#f85a5ad5;
        `}
    `}

`)