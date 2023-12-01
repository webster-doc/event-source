import styled, {css} from 'styled-components'
import {Text} from '@typography'
import {centerBlockInsideRelativeWrapper, stretchBlockOnRelativeWrapper} from "@mixins"
import CheckMarkUrl from "@icons/input/check-mark.svg"

import {sizes, borderRadius} from "./const"

import { PrimaryCheckboxProps, ErrorProps } from './types'

export const Wrapper = styled.label<PrimaryCheckboxProps>`
    position: relative;
    
    display: inline-flex;
    align-items: center;
    flex-direction: ${({ labelPosition = 'left' }) => labelPosition === 'left' ? 'row' : 'row-reverse'};
  
    min-height: ${({ size = 'md' }) => sizes[size].checkbox}px;

    & > ${Text} {
        padding-${({ labelPosition = 'left' }) => labelPosition === 'left' ? 'left' : 'right'}: 10px;
    }
`

export const ShapeWrapper = styled.div<Required<Pick<PrimaryCheckboxProps, 'size'>>>`
    position: relative;
    width: ${({ size = 'md' }) => sizes[size].checkbox}px;
    height: ${({ size = 'md' }) => sizes[size].checkbox}px; 
        
    border-radius: ${borderRadius}px;
  
    &:before  {
      content: '';
      ${stretchBlockOnRelativeWrapper()};
      background: ${({theme}) => theme.palette.colors.secondary};
      border-radius: 50%;
      opacity: 0.1;
    }
  
    &:before {
      transform: scale(0);
    }
        
    &:hover:before {
        transform: scale(1.8);
        transition: transform ${({ theme }) => theme.transitionDuration.xs} ease;
    }
`

export const Shape = styled.div<Required<Pick<PrimaryCheckboxProps, 'size'>>>`
    position: relative;
    z-index: ${({ theme }) => theme.zLayer.first};
    width: ${({ size = 'md' }) => sizes[size].checkbox}px;
    height: ${({ size = 'md' }) => sizes[size].checkbox}px;

    background-color: ${({ theme }) => theme.palette.colors.quinary};

    border-radius: ${borderRadius}px;
    border: 1px solid silver;
  
    &:before, &:after {
      content: '';
    }

    &:before {
      ${stretchBlockOnRelativeWrapper({offset: -1})};
      background-color: ${({ theme }) => theme.palette.colors.primary};
      border-radius: ${borderRadius}px;  
      opacity: 0;
    }
        
    &:after {
        background: url(${CheckMarkUrl}) center no-repeat;
        background-size: contain;
        width: ${({ size = 'md' }) => sizes[size].mark}px;
        height: ${({ size = 'md' }) => sizes[size].mark}px;

        ${centerBlockInsideRelativeWrapper({additionalTransformValues: 'scale(0)'})};
    }
`

export const HiddenRadioButton = styled.input`
    position: absolute;
    opacity: 0;
    visibility: hidden;

    &:checked + ${ShapeWrapper} ${Shape}:after {
      ${centerBlockInsideRelativeWrapper({additionalTransformValues: 'scale(1)'})};
      transform-origin: left bottom;
      transition: transform ${({ theme }) => theme.transitionDuration.xs} ease;
    }

    &:checked + ${ShapeWrapper} ${Shape}:before, &:focus + ${ShapeWrapper} ${Shape}:before {
      transition: opacity ${({ theme }) => theme.transitionDuration.xs} ease;
      opacity: 1;
    }

    &:disabled + ${ShapeWrapper}:before {
      display:none;
    }

    &:disabled + ${ShapeWrapper}, &:disabled ~ ${Text} {
      opacity: 0.3;
    }

    & + * {
        cursor: pointer;
    }

    &:disabled ~ * {
      cursor: auto;
    }
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
