import styled from 'styled-components'
import { COLORS } from '../../constants/variables'

export const ModalBackdrop = styled.div`
width: 100%;
height: 100%;
background-color: ${COLORS.primaryBlack}99;
position: absolute;
z-index: 10;
top:0;
display: flex;
justify-content: center;
align-items: center;
`

export const ModalContainer = styled.div`
width:650px;
height:700px;
background-color:${COLORS.primaryBlack};
color:${COLORS.primaryWhite};
border-radius:5px;
`