import styled from 'styled-components'
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from '../../../../constants/variables'

export const BookContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
export const BookDetailsContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:24px;
padding:0 40px;
`

export const LineWrapper = styled.div`
text-align: center;
`

export const Property = styled.span`
font-size:18px;
font-family: ${FONT_FAMILY.inter};
font-weight: ${FONT_WEIGHT.medium};
color:${COLORS.secondaryBlue};
`

export const Value = styled.span`
font-size:22px;
font-family: ${FONT_FAMILY.inter};
font-weight: ${FONT_WEIGHT.bold};
color:${COLORS.primaryWhite};
`


export const ButtonWrapper = styled.div`
width:200px;
height: 50px;
padding: 0px 0 50px 0;
`