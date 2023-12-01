import {FC, ReactElement} from "react";
import {SelectItemProps} from "./../../types";


export interface PrimarySelectSingleProps<TOption extends object>
 {
    options?: TOption[],
    value?: TOption | undefined,
    optionValueKey: TOption extends object ? keyof TOption : undefined,
    optionLabelKey: TOption extends object ? keyof TOption : undefined,
    children?: (SelectItem: FC<SelectItemProps>, option: TOption, isActive: boolean) => ReactElement,
    onChange?: (value: TOption | undefined) => void
 }