import styled, {css} from 'styled-components'
import {centerBlockInsideRelativeWrapper} from "@mixins"
import {sizes} from "./const"

const controlSize = 16,
      thumbStyle = css`
        appearance: none;
        pointer-events: all;
        width: ${controlSize}px;
        height: ${controlSize}px;
        border-radius: 0px;
        border: 0 none;
        cursor: grab;
        opacity: 0;
      
        &:active {
          cursor: grabbing;
        }
      `,
      trackStyle = css`
        appearance: none;
        background: transparent;
        border: transparent;
      `

export const Wrapper = styled.div`
    position: relative; 
`

export const RangeInput = styled.input`
  width: 100%;
  position: relative;
  ${trackStyle}

  &::-ms-track {
    ${trackStyle}
  }

  &::-moz-range-track {
    ${trackStyle}
  }

  &:focus::-webkit-slider-runnable-track {
    ${trackStyle}
  }
  
  &::-ms-thumb {
    ${thumbStyle}
  }

  &::-moz-range-thumb {
    ${thumbStyle}
  }

  &::-webkit-slider-thumb {
    ${thumbStyle}
  }
  
`

export const ControlsWrapper = styled.div`
    position: absolute;
    height: ${controlSize}px;
    left: ${controlSize / 2}px;
    right: ${controlSize / 2}px;
`

export const Control = styled.div`
  ${centerBlockInsideRelativeWrapper({axis: 'y', additionalTransformValues: 'translateX(-50%)'})}
  width: ${controlSize}px;
  height: ${controlSize}px;
  border-radius: 50%;
  background: ${({theme}) => theme.palette.colors.primary};
`

export const ControlTooltip = styled.div`
  ${centerBlockInsideRelativeWrapper({axis: 'x'})}
  bottom: 100%;
  white-space: nowrap;
`

export const Rail = styled.div`
  ${centerBlockInsideRelativeWrapper({axis: 'y'})}
  
  width: 100%;
  height: 6px;
  
  border-radius: 3px;
  background: ${({theme}) => theme.palette.colors.disabled}; 
`

export const Line = styled.div`
  position: absolute;
  height: 100%;
  background: ${({theme}) => theme.palette.colors.secondary};
  opacity: 0.5; 
  border-radius: 3px;
`