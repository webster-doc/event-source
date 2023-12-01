import styled from 'styled-components'
import {Title} from './../../title'

import {sizes} from './const'

import { H3Props } from './types'



export const H3 = styled(Title)<H3Props>`
  font-size: ${({ size = 'primary'}) => sizes[size].mobile.fontSize};
  
  @media (min-width: 768px) {
    font-size: ${({ size = 'primary' }) => sizes[size].desktop.fontSize};
  }
    
`