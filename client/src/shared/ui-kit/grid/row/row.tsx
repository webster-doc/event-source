import React from 'react'
import styled, {css} from 'styled-components'
import {tabletMobileFirst, desktopMobileFirst} from '@styles-const'
import {paddingColor, contentColor, marginColor} from './../const'
import {Col} from '@grid'

import {RowProps} from './types'

export const Row = styled.div<RowProps>`
  position: ${({isRelative}) => isRelative ? 'relative' : 'static'};

  display: flex;
  flex-wrap: wrap;


  ${({debug}) =>
          debug &&
          css`
            position: relative;
            min-height: 200px;
            padding-top: 20px !important;

            &:before {
              content: 'row';
              text-align: center;
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;

              background-color: ${contentColor};
            }

            & > * {
              position: relative;
              background-color: ${contentColor};
            }
          `}

  ${({
       mobile: mobileRowSettings = {},
       tablet: tabletRowSettings = {},
       desktop: desktopRowSettings = {},
       debug,
     }) => {
    const {
              col: mobileCol = 12,
              offsetX: mobileOffsetX = 0,
              offsetY: mobileOffsetY = 0,
            } = mobileRowSettings,
            {
              col: tabletCol,
              offsetX: tabletOffsetX,
              offsetY: tabletOffsetY
            } = tabletRowSettings,
            {
              col: desktopCol,
              offsetX: desktopOffsetX,
              offsetY: desktopOffsetY,
            } = desktopRowSettings

    return css`
      ${Col} {
        padding: 0 ${mobileOffsetX / 2}px;

        ${
                debug &&
                css`
                  background-color: ${paddingColor};

                  &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: ${mobileOffsetX / 2}px;
                    right: ${mobileOffsetX / 2}px;
                    background-color: ${contentColor};

                    ${(tabletOffsetX || tabletOffsetX === 0) &&
                    css`
                      ${tabletMobileFirst} {
                        left: ${tabletOffsetX / 2}px;
                        right: ${tabletOffsetX / 2}px;
                      }
                    `}

                    ${(desktopOffsetX || desktopOffsetX === 0) &&
                    css`
                      ${desktopMobileFirst} {
                        left: ${desktopOffsetX / 2}px;
                        right: ${desktopOffsetX / 2}px;
                      }
                    `}
                  }

                  &:after {
                    left: 0;
                    right: 0;
                  }

                  & > * {
                    position: relative;
                  }
                `
        }


        ${
                (tabletOffsetX || tabletOffsetX === 0) &&
                css`
                  ${tabletMobileFirst} {
                    padding-left: ${tabletOffsetX / 2}px;
                    padding-right: ${tabletOffsetX / 2}px;
                  }
                `
        }

        ${
                (desktopOffsetX || desktopOffsetX === 0) &&
                css`
                  ${desktopMobileFirst} {
                    padding-left: ${desktopOffsetX / 2}px;
                    padding-right: ${desktopOffsetX / 2}px;
                  }
                `
        }
      }


      margin-left: -${mobileOffsetX / 2}px;
      margin-right: -${mobileOffsetX / 2}px;

      & > * {
        margin-bottom: ${mobileOffsetY}px;

        ${
                debug &&
                css`
                  &:after {
                    content: '';
                    position: absolute;
                    top: 100%;
                    height: ${mobileOffsetY}px;

                    background-color: ${marginColor};

                    ${(tabletOffsetY || tabletOffsetY === 0) &&
                    css`
                      ${tabletMobileFirst} {
                        height: ${tabletOffsetY}px;
                      }
                    `}

                    ${(desktopOffsetY || desktopOffsetY === 0) &&
                    css`
                      ${desktopMobileFirst} {
                        height: ${desktopOffsetY}px;
                      }
                    `}
                  }
                `
        }

        ${
                (tabletOffsetY || tabletOffsetY === 0) &&
                css`
                  ${tabletMobileFirst} {
                    margin-bottom: ${tabletOffsetY}px;
                  }
                `
        }

        ${
                (desktopOffsetY || desktopOffsetY === 0) &&
                css`
                  ${desktopMobileFirst} {
                    margin-bottom: ${desktopOffsetY}px;
                  }
                `
        }
      }

      margin-bottom: -${mobileOffsetY}px;

      ${
              (tabletOffsetY || tabletOffsetY === 0) &&
              css`
                ${tabletMobileFirst} {
                  margin-bottom: -${tabletOffsetY}px;
                }
              `
      }

      ${
              (desktopOffsetY || desktopOffsetY === 0) &&
              css`
                ${desktopMobileFirst} {
                  margin-bottom: -${desktopOffsetY}px;
                }
              `
      }

      ${
              (tabletOffsetX || tabletOffsetX === 0) &&
              css`
                ${tabletMobileFirst} {
                  margin-left: -${tabletOffsetX / 2}px;
                  margin-right: -${tabletOffsetX / 2}px;
                }
              `
      }

      ${
              (desktopOffsetX || desktopOffsetX === 0) &&
              css`
                ${desktopMobileFirst} {
                  margin-left: -${desktopOffsetX / 2}px;
                  margin-right: -${desktopOffsetX / 2}px;
                }
              `
      }
    `
  }};
`
