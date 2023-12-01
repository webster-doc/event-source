import { textAlign } from '@common-types'
import { primaryTheme } from "@app-theme"

export interface TitleProps {
    textAlign?: typeof textAlign
    color?: keyof typeof primaryTheme.palette.fonts
    weight?: 'light' | 'regular' | 'bold'
}
