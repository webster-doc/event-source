import React from 'react'
import { GlobalStyles } from '@global-styles'
import { StoryBookGlobalStyles } from '@app-story-book/styles/global-styles'

export const withGlobalStyle = (storyFn: any) => {
    return (
        <>
            <GlobalStyles />
            <StoryBookGlobalStyles />
            {storyFn()}
        </>
    )
}
