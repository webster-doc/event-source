import React, {ReactElement} from "react";
import {PrimaryAutocomplete} from "./../../index";
import {PrimaryAutocompleteSingleProps} from './types'


export const PrimaryAutocompleteSingle = <
    TOption extends object
    >({
          ...props
      }:PrimaryAutocompleteSingleProps<TOption>):ReactElement => {

    return <PrimaryAutocomplete isMultiply={false} {...props} />
}