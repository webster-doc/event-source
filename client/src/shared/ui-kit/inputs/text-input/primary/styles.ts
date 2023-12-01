import styled, {css} from 'styled-components'
import {centerBlockInsideRelativeWrapper, clearInputNumberArrows} from "@mixins"
import {sizes} from "./const"

import {InputProps, ErrorProps, IconWrapperProps} from './types'

export const Wrapper = styled.div`
  position: relative;
`

export const InputWrapper = styled.label`
  position: relative;
  display: block;
`

export const Label = styled.span`
     ${centerBlockInsideRelativeWrapper({axis: 'y'})}

     transform-origin: left;

     font-family: 'Roboto', sans-serif;
     line-height: 1;
     color: #8f8f8f;
     cursor: text;
`

export const Error = styled.span<ErrorProps>`
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 3px;

    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    line-height: 1;
    color: red;
     
    opacity: 0;
    
    ${({ isVisible = false }) => isVisible && css`                  
      opacity: 1;      
    `} 
     
`


export const Input = styled.input<InputProps>`
    width: 100%;
    padding: ${({sizeMod = 'md'}) => sizes[sizeMod].padding};

    border: 1px solid ${({ hasError, theme }) => hasError ? theme.palette.colors.error : theme.palette.border.primary};
    border-radius: 5px;
    outline: none;

    ${clearInputNumberArrows()}

    & ~ ${Label} {
      left: ${({sizeMod = 'md'}) => sizes[sizeMod].paddingX}px;
      font-size: ${({sizeMod = 'md'}) => sizes[sizeMod].labelFontSize}
    }
  
    //label-transform
    &:focus ~ ${Label} {
         transform: ${({sizeMod = 'md'}) => sizes[sizeMod].labelTransform};
    }
  
    ${({ isInputFilled, sizeMod = 'md' }) => isInputFilled && css`

      & ~ ${Label} {
        transform: ${sizes[sizeMod].labelTransform};
      }
      
    `}
  
`

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  ${centerBlockInsideRelativeWrapper({axis: 'y'})}
  ${({ position = 'left' }) => position}: ${({sizeMod = 'md'}) => sizes[sizeMod].paddingX}px;

  & ~ ${Input} {
    padding-${({ position = 'left' }) => position}: ${({sizeMod = 'md'}) => sizes[sizeMod].paddingX + sizes[sizeMod].iconWidth + sizes[sizeMod].iconPadding}px;
  }

  & ~ ${Label} {
    ${({ position = 'left' }) => position}: ${({sizeMod = 'md'}) => sizes[sizeMod].paddingX + sizes[sizeMod].iconWidth + sizes[sizeMod].iconPadding}px;
  }
  
  svg {
    width: ${({sizeMod = 'md'}) => sizes[sizeMod].iconWidth}px;
  }
  
`