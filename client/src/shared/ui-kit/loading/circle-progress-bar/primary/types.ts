import {HTMLAttributes, ReactNode} from 'react';

export type renderProps = {
    isHalfCircleFilled: boolean,
    isFullCircleFilled: boolean,
    value: number,
    percent: number,
    maxValue: number,
}


export interface PrimaryCircleProgressBarProps extends HTMLAttributes<HTMLDivElement> {
    value: number,
    maxValue?: number,
    render?: (props:renderProps) => ReactNode
}

export interface SuccessFilledCircleProps {
    isVisible?: boolean
}