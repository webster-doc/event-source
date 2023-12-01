import {InputHTMLAttributes, HTMLInputTypeAttribute, ChangeEvent, MouseEvent, ReactElement} from 'react';

type IconFn = () => ReactElement

let PrimaryInputSizeList: 'sm' | 'md'

export type PrimaryInputChangeHandler = (value: string, e: ChangeEvent<HTMLInputElement> | MouseEvent) => void

export interface PrimaryTextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /**
     * Input type
     */
    type?: Extract<HTMLInputTypeAttribute, 'number' | 'text' | 'password'>;
    /**
     * Input size
     */
    sizeMod?: typeof PrimaryInputSizeList;
    /**
     * Input label
     */
    label?: string;
    /**
     * Is input disabled
     */
    disabled?: boolean;
    /**
     * Input modifications
     */
    mod?: 'primary' | 'secondary',
    /**
     * Input error text
     */
    error?: string,
    /**
     * Input value change handler
     */
    // onChange?: (value: string, e: ChangeEvent<HTMLInputElement> | MouseEvent) => void
    /**
     * Input left icon
     */
    LeftIcon?: ReactElement | IconFn,
    /**
     * Input right icon
     */
    RightIcon?: ReactElement | IconFn,
}

export interface InputProps extends PrimaryTextInputProps {
    /**
     * is Input value filled
     */
    isInputFilled?: boolean,
    /**
     * is Input has error
     */
    hasError?: boolean
}

export interface ErrorProps {
    /**
     * Is error visible
     */
    isVisible?: boolean
}

export interface IconWrapperProps extends Pick<PrimaryTextInputProps, 'sizeMod'> {
    position: 'left' | 'right'
}