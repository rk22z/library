import styled from 'styled-components'
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from '../../constants/variables'


export const LayoutContainer = styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction:column;
gap:20px;`

export const HeaderWrapper = styled.div`
width:100%;
height:150px;
background-color: ${COLORS.primaryBlack}cc;
backdrop-filter: blur(6.5px);
`

export const ContentContainer = styled.div`
width: 100%;
height: 100%;
display:flex;
gap:20px;
`

export const SideMenuWrapper = styled.div`
width: 450px;
height: calc(100vh - 170px);
background-color: ${COLORS.primaryBlack}cc;
backdrop-filter: blur(6.5px);
`

export const ContentWrapper = styled.div`
width:100%;
height: calc(100vh - 170px);
background-color: ${COLORS.primaryBlack}cc;
backdrop-filter: blur(6.5px);
overflow-y: scroll;

&::-webkit-scrollbar {
  display: none;
}
`