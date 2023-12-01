import styled from 'styled-components'
import {Title} from './../../title'

import {sizes} from './const'

import { H1Props } from './types'



export const H1 = styled(Title)<H1Props>`
  font-size: ${({ size = 'primary'}) => sizes[size].mobile.fontSize};
  
  @media (min-width: 768px) {
    font-size: ${({ size = 'primary' }) => sizes[size].desktop.fontSize};
  }
    
`