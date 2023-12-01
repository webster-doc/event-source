import {primaryTheme} from '@app-theme'

export const sizeProps = {
    fontSize: {
        sm: '12px',
        md: '14px',
    },
    lineHeight: {
        sm: '14px',
        md: '14px',
    },
    padding: {
        sm: '13.5px 29px',
        md: '20px 39px',
    }
} as const

export const getModProps = (palette: typeof primaryTheme.palette ) => {
    const {colors, fonts: fontColors} = palette

    return {
        primary: {
            static: {
                background: colors.primary,
                borderColor: colors.primary,
                color: fontColors.tertiary
            },
            hover: {
                background: colors.tertiary,
                borderColor: colors.tertiary,
                color: fontColors.tertiary
            },
            focus: {
                background: colors.tertiary,
                borderColor: colors.quaternary,
                color: fontColors.tertiary,
            },
            active: {
                background: colors.quinary
            }
        },
        secondary: {
            static: {
                background: 'transparent',
                borderColor: colors.senary,
                color: fontColors.primary
            },
            hover: {
                background: 'rgba(0,69,255,0.1)',
                borderColor: colors.primary,
                color: fontColors.quaternary
            },
            focus: {
                background: 'rgba(0,69,255,0.1)',
                borderColor: colors.quaternary,
                color: fontColors.quaternary,
            },
            active: {
                background: colors.primary
            }
        },
    }
}