import React from 'react'
import { ThemeProvider } from 'styled-components'
import { primaryTheme } from '@app-theme'

export const withTheme = (storyFn: any) => {
    return (
        <ThemeProvider theme={primaryTheme} >
            {storyFn()}
        </ThemeProvider>
    )
}
