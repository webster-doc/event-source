import styled from 'styled-components'
import {Title} from './../../title'

import {sizes} from './const'

import { H2Props } from './types'



export const H2 = styled(Title)<H2Props>`
  font-size: ${({ size = 'primary'}) => sizes[size].mobile.fontSize};
  
  @media (min-width: 768px) {
    font-size: ${({ size = 'primary' }) => sizes[size].desktop.fontSize};
  }
    
`