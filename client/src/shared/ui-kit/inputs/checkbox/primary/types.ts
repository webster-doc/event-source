import {InputHTMLAttributes} from 'react';

export interface PrimaryCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * How large should the button be?
     */
    size?: "sm" | "md";
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
     * Label position
     */
    labelPosition?: 'right' | 'left',
    /**
     * Input error text
     */
    error?: string,
}

export interface ErrorProps {
    /**
     * Is error visible
     */
    isVisible?: boolean
}