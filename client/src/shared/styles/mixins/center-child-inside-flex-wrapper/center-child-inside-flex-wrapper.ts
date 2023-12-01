import { css } from 'styled-components'

import { CenterChildInsideFlexWrapper } from './types'

export const centerChildInsideFlexWrapper: CenterChildInsideFlexWrapper = (props= {}) => {
    const {axis = 'both'} = props

    return css`
      display: flex;
      ${axis === 'x' || axis === 'both' ? 'justify-content: center' : ''};
      ${axis === 'y' || axis === 'both' ? 'align-items: center' : ''};
    `
}
