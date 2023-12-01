import {FC, HTMLAttributes, ReactElement} from "react";

export interface SelectItemProps extends HTMLAttributes<HTMLDivElement> {
    value?: string | number,
    isActive?: boolean,
    disabled?: boolean
}

export interface PrimaryAutocompleteMultiplyProps<TOption extends object>
 {
    options?: TOption[],
    value?: TOption[] | [],
    optionValueKey: keyof TOption
    optionLabelKey: keyof TOption,
    children?: (SelectItem: FC<SelectItemProps>, option: TOption, isActive: boolean) => ReactElement,
    onChange?: (value: TOption[] | []) => void,
    onInputChange?: (value: string) => void,
    inputValue?: string,
 }