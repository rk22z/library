import styled from 'styled-components'
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from '../constants/variables'


export const HomepageContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`

export const ContentContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
row-gap:30px;
`

export const BookWrapper = styled.div`
width:25%;
`

export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 16px 32px;
`

export const Count = styled.p`
font-family: ${FONT_FAMILY.inter};
font-weight: ${FONT_WEIGHT.semibold};
color:${COLORS.primaryWhite};
text-transform:uppercase;
margin:0;
`

export const SearchBar = styled.div`
font-family: ${FONT_FAMILY.inter};
font-weight: ${FONT_WEIGHT.semibold};
color:${COLORS.primaryWhite};
text-transform:uppercase;
`