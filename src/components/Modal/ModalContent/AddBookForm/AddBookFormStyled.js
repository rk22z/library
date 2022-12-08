import styled from 'styled-components'
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from '../../../../constants/variables'


export const AddFormContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:16px;
`

export const AddFormInputWrapper = styled.div`
margin:0 auto;
width:70%;
display: flex;
flex-direction: column;
`

export const AddFormLabel = styled.span`
color:${COLORS.primaryWhite};
font-weight: ${FONT_WEIGHT.bold};
font-family: ${FONT_FAMILY.inter};
font-size: 18px;
text-transform: capitalize;
`

export const AddFormInput = styled.input`
background-color: ${COLORS.primaryGray};
color:${COLORS.primaryWhite};
height: 50px;
border-radius: 45px;
border:none;
font-weight: ${FONT_WEIGHT.semibold};
font-size: 18px;
font-family: ${FONT_FAMILY.inter};
padding:0px 0px 0px 32px;

&:focus{
    outline:none;
}
&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0px;
}
`

export const ButtonWrapper = styled.div`
width:200px;
height: 50px;
padding: 50px 0 0 0;
`