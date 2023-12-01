import React, {FC} from "react";
import {SelectItemProps} from "../../../types";
import {SelectOption} from "./styles";

export const PrimarySelectOption: FC<SelectItemProps> = ({children, isActive, ...props}) => {
    return <SelectOption isActive={isActive} {...props} >
        {children}
    </SelectOption>
}