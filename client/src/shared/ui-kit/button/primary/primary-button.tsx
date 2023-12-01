import React from "react";
import {ButtonProps} from "./types"
import {Button, Label, PulsingCircleWrapper} from "./styles"

/**
 * Primary UI component for user interaction
 */
export const PrimaryButton = ({
  sizeMod = "md",
  mod = 'primary',
  label,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (<Button {...props} {...{sizeMod, mod, type}} >
    <Label>
      {label.toUpperCase()}
    </Label>
    <PulsingCircleWrapper/>
  </Button>);
};