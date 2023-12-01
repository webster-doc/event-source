import { css } from 'styled-components'

import { ClearInputNumberArrows } from './types'

export const clearInputNumberArrows: ClearInputNumberArrows = () => {
    return css`
      &[type="number"]::-webkit-outer-spin-button,
      &[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      &[type='number'],
      &[type="number"]:hover,
      &[type="number"]:focus {
        appearance: none;
        -moz-appearance: textfield;
      }
    `
}
