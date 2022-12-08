import styled from 'styled-components'
import { COLORS, FONT_FAMILY, FONT_WEIGHT } from '../../../../constants/variables'

export const ReportContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 40px;
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