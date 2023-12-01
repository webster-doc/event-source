import {ReactNode} from "react";
let placements: 'top-left' | 'top-center' | 'top-right'

export interface PrimaryTooltipProps {
    placement?: typeof placements,
    title: string | number,
    isNowrap?: boolean,
    children?: ReactNode
}

export interface PrimaryTooltipWrapperProps {
    placement: typeof placements,
    isNowrap: boolean
}