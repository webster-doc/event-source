import React, { FC } from 'react'

import { Wrapper, Spinner } from './styles'

import {SpinnerProps} from './types'

export const PrimarySpinner: FC<SpinnerProps> = props => {
    return (
        <Wrapper {...props} >
            <Spinner />
        </Wrapper>
    )
}
