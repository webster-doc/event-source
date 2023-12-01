import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export const withRouter = (StoryComponent: any) => {
    return (
        <>
            <BrowserRouter>
                <StoryComponent />
            </BrowserRouter>
        </>
    )
}
