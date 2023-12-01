import styled from 'styled-components'
import { stretchBlockOnRelativeWrapper, centerChildInsideFlexWrapper } from "@mixins"

import {ProgressLineProps} from "./types";

export const Wrapper = styled.div`
    position: relative;
`

export const LineProgressBar = styled.div`
    position: relative;
    display: flex;
    height: 40px;
  
    background-color: ${({ theme }) => theme.palette.colors.disabled};
    border-radius: 8px;
    overflow: hidden;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
`

export const ProgressLine = styled.div<ProgressLineProps>`
    position: absolute;
    right: 100%;
    height: 100%;
  
    width: 100%;
    background-color: ${({ theme }) => theme.palette.colors.primary};
  
    transition: transform 0.5s 0s ease; 
  
    &:before {
        content: '';
        ${stretchBlockOnRelativeWrapper()}
        background-color: ${({ theme }) => theme.palette.colors.tertiary};
        opacity: ${({ isFullLineFilled }) => isFullLineFilled ? '1' : '0'};
        transition: opacity ${({ theme }) => theme.transitionDuration.md} ${({ theme }) => theme.transitionDuration.md};
    }
  
`


export const ContentWrapper = styled.div`
    ${centerChildInsideFlexWrapper({axis: 'y'})}
    ${stretchBlockOnRelativeWrapper()}
`

export const Hint = styled.div`
    margin-left: auto;
    margin-right: 15px;
`