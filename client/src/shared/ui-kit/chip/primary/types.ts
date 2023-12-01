import {HTMLAttributes, ReactNode, ReactElement} from "react";

export interface PrimaryChipProps extends HTMLAttributes<HTMLDivElement> {
     renderBeforeLabel?: () => ReactElement,
     renderAfterLabel?: () => ReactElement,
     color?: 'primary' | 'secondary',
     sizeMod?: "sm" | "md",
     mod?: 'primary' | 'secondary'
     label: string,
     onDelete?: () => void,
     DeleteIcon?: (() => ReactElement) | ReactElement,
}

export interface WrapperProps {
     sizeMod?: "sm" | "md",
     mod?: 'primary' | 'secondary',
     color?: 'primary' | 'secondary'
}