import styled, { css } from 'styled-components'
import { stretchBlockOnRelativeWrapper } from "@mixins"
import { tabletMobileFirst } from '@styles-const'

import { WrapperProps } from './types'

export const Wrapper = styled.div<WrapperProps>`
    ${stretchBlockOnRelativeWrapper({position: 'fixed'})}
    z-index: ${({ theme }) => theme.zLayer.second};
  
    display: flex;
    justify-content: center;
    align-items: center;
  
    opacity: 0;
    visibility: hidden;
    transition: opacity ${({ theme }) => theme.transitionDuration.md} ease, visibility 0s ${({ theme }) => theme.transitionDuration.md} ease;

    ${({ isOpen }) => isOpen && css`
            transition: opacity ${({ theme }) => theme.transitionDuration.md} ${({ theme }) => theme.transitionDuration.md} ease;
            visibility: visible;
            opacity: 1;
    `}
  
    ${tabletMobileFirst} {
        padding-top: 40px;
        padding-bottom: 40px;
    }
`

export const Overlay = styled.div`
  ${stretchBlockOnRelativeWrapper()}

  cursor: pointer;
  background: rgba(0, 0, 0, 0.6);
`

