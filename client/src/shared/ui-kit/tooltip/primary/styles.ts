import styled from 'styled-components'
import {placements} from "./const"
import {PrimaryTooltipWrapperProps} from './types'


export const TooltipWrapper = styled.div<PrimaryTooltipWrapperProps>`
  position: absolute;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.palette.backgrounds.primary};
  padding: 3px;
  opacity: 0;
  visibility: hidden;
  transition: opacity ${({ theme }) => theme.transitionDuration.sm} 0s ease, visibility 0s ${({ theme }) => theme.transitionDuration.sm} ease;
  white-space: ${({ isNowrap }) => isNowrap ? 'nowrap' : 'normal'};
  
  ${({ placement }) => placement && placements[placement]}
`

export const Wrapper = styled.div`
    position: relative;
    display: inline-flex;
    cursor: pointer;
    
    &:hover ${TooltipWrapper} {
      opacity: 1;
      visibility: visible;
      transition: opacity ${({ theme }) => theme.transitionDuration.sm} 0s ease, visibility 0s 0s ease;
    }
`