import styled, {css} from 'styled-components'
import { stretchBlockOnRelativeWrapper, centerChildInsideFlexWrapper } from "@mixins"
import { overflowVisible } from "@keyframes"

import { SuccessFilledCircleProps } from "./types"


export const ProgressCircle = styled.div`
    position: relative;
    width: 100px;
    height: 100px;

    &:before {
      content: '';
      ${stretchBlockOnRelativeWrapper()}
  
      border: 3px solid ${({ theme }) => theme.palette.border.primary};
      border-radius: 50%;
    }
      
`

const Half = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100px;

    border: 3px solid transparent;
    border-radius: 50%;
    border-bottom-color: ${({ theme }) => theme.palette.colors.primary};
    border-right-color: ${({ theme }) => theme.palette.colors.primary};
    transform: rotate(-45deg);
`

export const MovingHalf = styled(Half)`
      transition: transform ${({ theme }) => theme.transitionDuration.md} 0s ease;
`

export const FilledHalf = styled(Half)`
  opacity: 0;
`

export const PieceWrapper = styled.div`
    position: absolute;
    left: 50%;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;

    &.is-half-circle-filled {
      animation: ${overflowVisible};
      animation-delay: ${({ theme }) => theme.transitionDuration.md};
      animation-fill-mode: forwards;

      ${FilledHalf} {
            transition: opacity 0s ${({ theme }) => theme.transitionDuration.md};
            opacity: 1;
      }

    }
`

export const SuccessFilledCircle = styled.div<SuccessFilledCircleProps>`
    ${stretchBlockOnRelativeWrapper()}
    border: 3px solid ${({ theme }) => theme.palette.colors.tertiary};
    border-radius: 50%;

    opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
    z-index: ${({ theme }) => theme.zLayer.second};
    transition: opacity ${({ theme }) => theme.transitionDuration.md} ${({ theme }) => theme.transitionDuration.md} ease;
  
    ${({ isVisible }) => isVisible && css`                  
          & ~ ${PieceWrapper} {
            transition: opacity ${({ theme }) => theme.transitionDuration.md} ${({ theme }) => theme.transitionDuration.md};
            opacity: 0;
          }
    `}
  
`

export const ContentWrapper = styled.div`
    ${centerChildInsideFlexWrapper()}
    ${stretchBlockOnRelativeWrapper()}
`
