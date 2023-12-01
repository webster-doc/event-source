import styled, { css } from 'styled-components'
import { stretchBlockOnRelativeWrapper } from "@mixins"
import { rotate360 } from "@keyframes"
import { sizes, alignXList } from "./const"
import { SpinnerProps } from './types'

export const Wrapper = styled.div<SpinnerProps>`
    position: relative;
    display: block;
  
    width: ${({ size = 'md' }) => sizes[size]}px;
    height: ${({ size = 'md' }) => sizes[size]}px;

    ${({ alignX = 'left' }) => css`
        ${alignXList[alignX]}
    `}
`

export const Spinner = styled.div`
    ${stretchBlockOnRelativeWrapper()}

    &:before,
    &:after {
        content: '';
        ${stretchBlockOnRelativeWrapper()}

        border: 2px solid;
        border-radius: 50%;
    }

    &:before {
        border-color: ${({ theme }) => theme.palette.colors.primary};
        opacity: 0.3;
    }

    &:after {
        border-color: transparent;
        border-bottom-color: ${({ theme }) => theme.palette.colors.primary};
        animation: ${rotate360} 1s infinite linear;
    }
`
