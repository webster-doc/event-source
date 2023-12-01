import { textAlign } from '@common-types'
import {primaryTheme} from "@app-theme"

export interface TextProps {
    size?: 'sm' | 'md' | 'lg'
    textAlign?: typeof textAlign
    color?: keyof typeof primaryTheme.palette.fonts
    weight?: 'light' | 'regular'
    isPointer?: boolean
}
