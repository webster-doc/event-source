import React from 'react'
import styled, { css } from 'styled-components'
import { tabletMobileFirst, desktopMobileFirst } from '@styles-const'

import { ContainerProps } from './types'

import { getContainerParams } from './helpers/get-container-params'
import { paddingColor, contentColor } from './../const'
import { containerData } from './const'

const {
    containerWidth_mobile,
    securedFieldWidth_mobile,
    containerWidth_tablet,
    securedFieldWidth_tablet,
    containerWidth_desktop,
    securedFieldWidth_desktop,
} = getContainerParams(containerData)

export const Container = styled.div<ContainerProps>`
    max-width: ${containerWidth_mobile};
    padding: 0 ${securedFieldWidth_mobile};
    margin: 0 auto;

    ${({ debug, theme }) =>
        debug &&
        css`
            position: relative;
            min-height: 200px;
            padding-top: 20px !important;
            background-color: ${paddingColor};

            & > * {
                position: relative;
            }

            &:before {
                content: 'container';
                text-align: center;
                position: absolute;
                left: ${securedFieldWidth_mobile};
                right: ${securedFieldWidth_mobile};
                top: 0;
                bottom: 0;
                background-color: ${contentColor};

                ${tabletMobileFirst} {
                    left: ${securedFieldWidth_tablet};
                    right: ${securedFieldWidth_tablet};
                }

                ${desktopMobileFirst} {
                    left: ${securedFieldWidth_desktop};
                    right: ${securedFieldWidth_desktop};
                }
            }
        `}

    ${tabletMobileFirst} {
        max-width: ${containerWidth_tablet};
        padding: 0 ${securedFieldWidth_tablet};
    }

    ${desktopMobileFirst} {
        max-width: ${containerWidth_desktop};
        padding: 0 ${securedFieldWidth_desktop};
    }
`
