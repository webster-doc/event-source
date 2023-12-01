import {HTMLAttributes, ReactNode} from 'react';

export type renderProps = {
    isFullLineFilled: boolean,
    value: number,
    percent: number,
    maxValue: number,
}

export interface PrimaryLineProgressBarProps extends HTMLAttributes<HTMLDivElement> {
    value: number,
    maxValue?: number,
    render?: (props:renderProps) => ReactNode
}

export interface ProgressLineProps extends HTMLAttributes<HTMLDivElement> {
    isFullLineFilled?: boolean,
}