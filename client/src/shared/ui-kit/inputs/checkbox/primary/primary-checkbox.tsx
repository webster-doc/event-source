import React, { FC } from "react";
import { PrimaryCheckboxProps } from "./types"
import { Wrapper, HiddenRadioButton, Shape, ShapeWrapper, Error } from "./styles"
import {Text} from '@typography'

/**
 * Primary UI component for user interaction
 */
export const PrimaryCheckbox:FC<PrimaryCheckboxProps> = ({
  size = "md",
  mod = 'primary',
  label,
  name= 'checkbox',
  labelPosition = 'left',
  error = '',
  ...props
})  => {
    const hasError = error && error.length > 0

  return (
          <Wrapper {...{size, labelPosition, mod}} >
              <HiddenRadioButton name={name} type='checkbox' {...props}  />
              <ShapeWrapper size={size} >
                  <Shape size={size} />
              </ShapeWrapper>
              {label && <Text as='span'>{label}</Text>}
              {hasError && <Error isVisible={hasError} >{error}</Error>}
          </Wrapper>
    )
};