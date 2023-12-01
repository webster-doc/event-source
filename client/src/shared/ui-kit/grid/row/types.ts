interface ColSettingsProps {
    col?: number
    offsetX?: number
    offsetY?: number
}

export interface RowProps {
    mobile?: ColSettingsProps
    tablet?: ColSettingsProps
    desktop?: ColSettingsProps

    debug?: boolean

    isRelative?: boolean
}
