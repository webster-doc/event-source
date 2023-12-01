import styled, {css} from 'styled-components'
import {stretchBlockOnRelativeWrapper, centerBlockInsideRelativeWrapper} from "@mixins"
import {sizeProps, getModProps} from "./const"
import {ButtonProps} from "./types"

export const PulsingCircleWrapper = styled.div`
  ${stretchBlockOnRelativeWrapper({offset: -1})};
  border-radius: ${({theme}) => theme.radius.md};
  overflow: hidden;

  &:after {
    content: '';
    ${centerBlockInsideRelativeWrapper({additionalTransformValues: 'scale(0)'})}
    width: 50px;
    height: 50px;

    background: ${({theme}) => theme.palette.colors.quinary};
    border-radius: 50%;
    opacity: 0.2;

    z-index: ${({theme}) => theme.zLayer.first};
  }
`

export const Button = styled.button<Omit<ButtonProps, 'label'>>`
  position: relative;
  
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: ${({theme}) => theme.palette.colors.quinary};
  cursor: pointer;
  opacity: ${({ disabled }) => disabled ? '0.5' : '1'};

  border-radius: ${({theme}) => theme.radius.md};
  border: 1px solid;
  
  //layer for change focus style
  &:before {
    content: '';
    ${stretchBlockOnRelativeWrapper({offset: -1})};

    background: ${({theme}) => theme.palette.colors.primary};
    border: 1px solid ${({theme}) => theme.palette.colors.primary};
    border-radius: ${({theme}) => theme.radius.md};
    opacity: 0;
    transition: opacity ${({theme}) => theme.transitionDuration.xs} ease;
  }
  
  //layer for change button bg
  &:after {
    content: '';
    ${stretchBlockOnRelativeWrapper({offset: -1})};

    background: ${({theme}) => theme.palette.colors.primary};
    border: 1px solid ${({theme}) => theme.palette.colors.primary};
    border-radius: ${({theme}) => theme.radius.md};
    opacity: 0;
    transition: opacity ${({theme}) => theme.transitionDuration.xs} ease;
  }

  ${({ sizeMod = 'sm' }) => {
    return css`
      font-size: ${sizeProps.fontSize[sizeMod]};
      line-height: ${sizeProps.lineHeight[sizeMod]};
      padding: ${sizeProps.padding[sizeMod]};
    `
  }}
  
  ${({ mod = 'primary', theme}) => {
    const modProps = getModProps(theme.palette)

    return css`
      background: ${modProps[mod].static.background};
      border-color: ${modProps[mod].static.borderColor};
      color: ${modProps[mod].static.color};

      //layer for change focus style
      &:before {
        background: ${modProps[mod].focus.background};
        border-color: ${modProps[mod].focus.borderColor};
      }
      
      //layer for change button bg
      &:after {
        background: ${modProps[mod].hover.background};
        border-color: ${modProps[mod].hover.borderColor};
      }
      
      ${PulsingCircleWrapper}:after {
        background: ${modProps[mod].active.background};
      }
      
      &:hover {
        color: ${modProps[mod].hover.color};

        &:after {
          opacity: 1;
        }
      }

      &:focus {
        color: ${modProps[mod].focus.color};

        &:before {
          opacity: 1;
        }
      }

      &:active {

        ${PulsingCircleWrapper}:after {
          ${centerBlockInsideRelativeWrapper({additionalTransformValues: 'scale(3)'})}
          transition: transform ${({theme}) => theme.transitionDuration.sm} ease;
        }
      }
           `
  }}
  
  &:active,
  &:focus {
    outline: none !important;
  }

  &::-moz-focus-inner {
    border: 0 !important;
  }
`;

export const Label = styled.span`
  font: inherit;
  
  position: relative;
  z-index: ${({theme}) => theme.zLayer.first};
`

