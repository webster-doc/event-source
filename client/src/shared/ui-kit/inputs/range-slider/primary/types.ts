import {InputHTMLAttributes, ReactNode} from 'react';

export interface PrimaryRangeSliderProps extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * How large should the input be?
     */
    sizeMod?: "sm" | "md";
    /**
     * Input contents
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
     * Active Value
     */
    value: number,

    /**
     * Func for tooltip render
     */
    renderTooltip?: (value: number) => ReactNode
}