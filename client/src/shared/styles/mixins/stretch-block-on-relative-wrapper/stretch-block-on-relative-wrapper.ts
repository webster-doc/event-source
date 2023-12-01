import { css } from 'styled-components'
import { StretchBlockOnRelativeWrapper } from './types'

export const stretchBlockOnRelativeWrapper:StretchBlockOnRelativeWrapper = (props= {}) => {
    const {position = 'absolute', offset = 0} = props

    return css`
        position: ${position};
        left: ${offset}px;
        right: ${offset}px;
        top: ${offset}px;
        bottom: ${offset}px;
    `
}