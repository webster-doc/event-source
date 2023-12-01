import {FC, ReactElement} from "react";
import {SelectItemProps} from "./../../types";


export interface PrimarySelectMultiplyProps<TOption extends object>
 {
    options?: TOption[],
    value?: TOption[] | [],
    optionValueKey: keyof TOption
    optionLabelKey: keyof TOption,
    children?: (SelectItem: FC<SelectItemProps>, option: TOption, isActive: boolean) => ReactElement,
    onChange?: (value: TOption[] | []) => void
 }