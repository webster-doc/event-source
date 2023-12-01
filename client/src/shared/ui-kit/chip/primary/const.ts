import {primaryTheme} from "@app-theme";

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
        sm: '5px 10px',
        md: '10px 15px',
    }
} as const

export const getColorModProps = (palette: typeof primaryTheme.palette ) => {
    const {colors, backgrounds, fonts: fontColors} = palette

    return {
        primary: {
            fontColor: fontColors.primary,
            chipColor: backgrounds.secondary,
            iconColor: fontColors.primary
        },
        secondary: {
            fontColor: fontColors.tertiary,
            chipColor: colors.primary,
            iconColor: fontColors.tertiary
        },
    }
}
