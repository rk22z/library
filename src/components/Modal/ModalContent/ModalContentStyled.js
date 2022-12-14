import styled from 'styled-components'
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from '../../../constants/variables'

export const ModalContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const NoContentText = styled.p`
margin:0;
font-size:32px;
font-family:${FONT_FAMILY.inter};
font-weight: ${FONT_WEIGHT.bold};
color:${COLORS.primaryWhite};
`