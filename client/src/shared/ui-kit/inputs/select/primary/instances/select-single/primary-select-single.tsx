import React, {ReactElement} from "react";
import {PrimarySelect} from "./../../index";
import {PrimarySelectSingleProps} from './types'


export const PrimarySelectSingle = <
    TOption extends object
    >({
          ...props
      }:PrimarySelectSingleProps<TOption>):ReactElement => {

    return <PrimarySelect isMultiply={false} {...props} />
}