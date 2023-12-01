import {
    InputHTMLAttributes,
    FC,
    ReactNode,
    ReactElement,
    HTMLAttributes
} from 'react';

export interface SelectItemProps extends HTMLAttributes<HTMLDivElement> {
    value?: string | number,
    isActive?: boolean,
    disabled?: boolean
}

export interface PrimaryAutocompleteProps<
    TOption extends object,
    VIsMultiply extends boolean = false,
    TValue extends TOption | TOption[] | [] | undefined = undefined
    > extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange' | 'children'> {
    /**
     * How large should the button be?
     */
    sizeMod?: "sm" | "md";
    /**
     * Button contents
     */
    label?: string;
    /**
     * Is button disabled
     */
    disabled?: boolean;
    /**
     * Button modifications
     */
    mod?: 'primary' | 'secondary',
    /**
     * Button modifications
     */
    options?: TOption[],

    isMultiply?: VIsMultiply,


    value?: VIsMultiply extends true ? TOption[] | [] : TOption | undefined,
    onInputChange?: (value: string) => void,
    inputValue?: string,
    onChange?: VIsMultiply extends true ? (value: TOption[] | []) => void : (value: TOption | undefined) => void,
    children?: (SelectItem: FC<SelectItemProps>, option: TOption, isActive: boolean) => ReactElement,
    renderActive?: VIsMultiply extends true ? (items: TOption[], deleteOption: (option: TOption) => void) => ReactNode | ReactNode[] : (item: TOption) => ReactNode,
    optionValueKey: keyof TOption
    optionLabelKey: keyof TOption
}

export interface SelectInputWrapperProps {
    isSelectOpen: boolean,
    hasSelectedValue: boolean
}