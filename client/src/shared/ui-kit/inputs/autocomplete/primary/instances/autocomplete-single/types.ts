import {FC, HTMLAttributes, ReactElement} from "react";

export interface SelectItemProps extends HTMLAttributes<HTMLDivElement> {
    value?: string | number,
    isActive?: boolean,
    disabled?: boolean
}

export interface PrimaryAutocompleteSingleProps<TOption extends object>
 {
    options?: TOption[],
    value?: TOption | undefined,
    optionValueKey: TOption extends object ? keyof TOption : undefined,
    optionLabelKey: TOption extends object ? keyof TOption : undefined,
    children?: (SelectItem: FC<SelectItemProps>, option: TOption, isActive: boolean) => ReactElement,
    onChange?: (value: TOption | undefined) => void,
    onInputChange?: (value: string) => void,
    inputValue?: string,
 }