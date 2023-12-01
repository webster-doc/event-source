import styled, {css} from 'styled-components'
import {sizeProps, getColorModProps} from "./const"
import {WrapperProps} from './types'

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  
  width: 12px;
  margin-left: 10px;
  
  svg {
    width: 100%;
  }
  
  svg path {
    fill: white;
  }
  
`

export const Wrapper = styled.div<WrapperProps>`
    display: inline-flex;
    align-items: center;
    border-radius: ${({ theme }) => theme.radius.full};
    border: 1px solid transparent;


  ${({ sizeMod = 'sm' }) => {
      return css`
        font-size: ${sizeProps.fontSize[sizeMod]};
        line-height: ${sizeProps.lineHeight[sizeMod]};
        padding: ${sizeProps.padding[sizeMod]};
      `
    }}
  
  ${({ mod = 'primary', color = 'primary', theme }) => {
      const colorModProps = getColorModProps(theme.palette)
    
      switch (mod) {
        case 'primary':
          return css`
            color: ${colorModProps[color].fontColor};
            border-color: ${colorModProps[color].chipColor};
            background: ${colorModProps[color].chipColor};
            
            ${IconWrapper} svg path {
              fill: ${colorModProps[color].iconColor};
            }
            
          `
        case 'secondary':
          return css`
            color: ${colorModProps[color].fontColor};
            border-color: ${colorModProps[color].chipColor};

            ${IconWrapper} svg path {
              fill: ${colorModProps[color].iconColor};
            }
            
          `
      }
  }}
  
`