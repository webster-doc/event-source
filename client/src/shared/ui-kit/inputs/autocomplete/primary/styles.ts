import styled, {css} from 'styled-components'
import {centerBlockInsideRelativeWrapper} from "@mixins"
import {sizes} from "./const"

import {SelectInputWrapperProps, SelectItemProps} from './types'

export const Wrapper = styled.div`
    position: relative;
`

export const OptionListWrapper = styled.div`
    position:absolute;
    top: 100%;
    left: 0;
    right: 0;
  
    box-shadow: ${({ theme }) => theme.boxShadow.primary}
`

export const Label = styled.div`
  ${centerBlockInsideRelativeWrapper({axis: 'y'})};
  left: 15px;

  transform-origin: left;

  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  line-height: 1;
  color: #8f8f8f;
  cursor: text;
`

export const SearchInput = styled.input`
    position: relative;
    z-index: 9;
    flex-grow: 1;
    background: transparent;
    outline: none;
    border: none;
  
    &:focus ~ ${Label} {
      transform: translateY(-150%) scale(0.8);
    }
  
`

export const SelectInputWrapper = styled.div<SelectInputWrapperProps>`
    position: relative;

    display: flex;
    align-items: center;
    padding: 12px 15px;
    border: 1px solid silver;
    border-radius: 2px;
  
    svg {
      width: 15px;
      margin-right: 5px;
    }
  
    & ~ ${OptionListWrapper} {
      opacity: ${({ isSelectOpen }) => isSelectOpen ? '1' : '0'};
      visibility: ${({ isSelectOpen }) => isSelectOpen ? 'visible' : 'hidden'};
      transition: opacity ${({ theme }) => theme.transitionDuration.md} 0s ease, visibility 0s ${({ isSelectOpen, theme }) => isSelectOpen ? '0s' : theme.transitionDuration.md} ease;
    }

  ${({ hasSelectedValue}) => hasSelectedValue && css`

      ${Label} {
        transform: translateY(-150%) scale(0.8);
      }
      
    `}
  
    .select-arrow {
      transform:  rotate(${({ isSelectOpen }) => isSelectOpen ? '180' : '0'}deg);
    }
  
`



export const SelectedValuesWrapper = styled.div`
    display: flex;
  
    flex-grow: 1;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
`