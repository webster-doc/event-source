import styled from 'styled-components'
import {Text} from '@typography'
import {centerBlockInsideRelativeWrapper, stretchBlockOnRelativeWrapper} from "@mixins"
import {sizes} from "./const"

import {RadioProps} from './types'

export const Wrapper = styled.label<RadioProps>`
    position: relative;
    
    display: inline-flex;
    align-items: center;
    flex-direction: ${({ labelPosition = 'left' }) => labelPosition === 'left' ? 'row' : 'row-reverse'};
  
    min-height: ${({ size = 'md' }) => sizes[size].radioButton}px;

    & > ${Text} {
        padding-${({ labelPosition = 'left' }) => labelPosition}: 10px;
    }
`

export const ShapeWrapper = styled.div<Required<Pick<RadioProps, 'size'>>>`
    position: relative;
    width: ${({ size = 'md' }) => sizes[size].radioButton}px;
    height: ${({ size = 'md' }) => sizes[size].radioButton}px; 
        
    border-radius: 50%;
  
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

export const Shape = styled.div<Required<Pick<RadioProps, 'size'>>>`
    position: relative;
    z-index: ${({ theme }) => theme.zLayer.first};
    width: ${({ size = 'md' }) => sizes[size].radioButton}px;
    height: ${({ size = 'md' }) => sizes[size].radioButton}px;

    background-color: ${({ theme }) => theme.palette.colors.quinary};

    border-radius: 50%;
    border: 1px solid silver;
  
    &:before, &:after {
      content: '';
      border-radius: 50%;
    }

    &:before {
      ${stretchBlockOnRelativeWrapper({offset: -1})};
      border: 1px solid ${({ theme }) => theme.palette.colors.primary};
      opacity: 0;
    }
        
    &:after {
        width: ${({ size = 'md' }) => sizes[size].checkedCircleSize}px;
        height: ${({ size = 'md' }) => sizes[size].checkedCircleSize}px;
      
        background-color: ${({ theme }) => theme.palette.colors.primary};

        ${centerBlockInsideRelativeWrapper({additionalTransformValues: 'scale(0)'})};
    }
`

export const HiddenRadioButton = styled.input`
    position: absolute;
    opacity: 0;
    visibility: hidden;

    &:checked + ${ShapeWrapper} ${Shape}:after {
      ${centerBlockInsideRelativeWrapper({additionalTransformValues: 'scale(1)'})}
      transition: transform ${({ theme }) => theme.transitionDuration.xs} ease;
    }

    &:checked + ${ShapeWrapper} ${Shape}:before, &:focus + ${ShapeWrapper} ${Shape}:before {
      transition: opacity ${({ theme }) => theme.transitionDuration.sm} ease;
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
