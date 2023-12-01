import React from 'react'
import styled, { css } from 'styled-components'
import { tabletMobileFirst, desktopMobileFirst } from '@styles-const'

import { ColProps } from './types'

const singleColSize = 100 / 12

export const Col = styled.div<ColProps>`
    width: ${({ mobileSize }) => (mobileSize ? `${mobileSize * singleColSize}%` : `${12 * singleColSize}%`)};

    ${({ tabletSize }) =>
    tabletSize &&
    css`
            ${tabletMobileFirst} {
                width: ${tabletSize * singleColSize}%;
            }
        `}

    ${({ desktopSize }) =>
    desktopSize &&
    css`
            ${desktopMobileFirst} {
                width: ${desktopSize * singleColSize}%;
            }
        `}
`
