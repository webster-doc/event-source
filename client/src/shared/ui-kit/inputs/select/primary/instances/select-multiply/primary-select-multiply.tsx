import React, {ReactElement} from "react";
import {PrimarySelect} from "./../../index";
import {PrimarySelectMultiplyProps} from './types'


export const PrimarySelectMultiply = <
    TOption extends object
    >({
          ...props
      }:PrimarySelectMultiplyProps<TOption>):ReactElement => {

    return <PrimarySelect isMultiply {...props} />
}