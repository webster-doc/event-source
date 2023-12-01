import React, {FC} from "react";
import {RadioProps} from "./types"
import { Wrapper, HiddenRadioButton, Shape, ShapeWrapper} from "./styles"
import {Text} from '@typography'

/**
 * Primary UI component for user interaction
 */
export const PrimaryRadio:FC<RadioProps> = ({
  size = "md",
  mod = 'primary',
  label,
  name= 'radio',
  labelPosition = 'left',
  ...props
})  => {
  return (
    <Wrapper {...{size, labelPosition, mod}} >
      <HiddenRadioButton name={name} type='radio' {...props}  />
      <ShapeWrapper size={size} >
        <Shape size={size} />
      </ShapeWrapper>
      {label && <Text as='span'>{label}</Text>}
    </Wrapper>)
};