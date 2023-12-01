import styled from 'styled-components'

import {BoxProps} from './types'

export const Box = styled.div<BoxProps>`
  position: ${({ isRelative = false }) => isRelative ? 'static' : 'relative'};
  display: flex;
  flex-grow: ${({ isFluid  = false }) => isFluid ? '1' : 'initial'};
  width: ${({ isFullWidth = false }) => isFullWidth ? '100%' : 'auto'};
  height: ${({ isFullHeight  = false }) => isFullHeight ? '100%' : 'auto'};
  align-items: ${({ alignItems = 'flex-start' }) => alignItems};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  flex-direction: ${({ direction = 'row' }) => direction};
  gap: ${({ gap }) => gap ? gap : '0'};
`

