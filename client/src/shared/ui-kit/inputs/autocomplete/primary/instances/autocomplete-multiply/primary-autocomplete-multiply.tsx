import React, {ReactElement} from "react";
import {PrimaryAutocomplete} from "./../../index";
import {PrimaryAutocompleteMultiplyProps} from './types'


export const PrimaryAutocompleteMultiply = <
    TOption extends object
    >({
          ...props
      }:PrimaryAutocompleteMultiplyProps<TOption>):ReactElement => {

    return <PrimaryAutocomplete isMultiply {...props} />
}