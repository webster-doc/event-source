import React from 'react'
import styled from 'styled-components'
import { weightList } from "./const"
import { TitleProps } from './types'

export const Title = styled.p<TitleProps>`
    font-family: 'Roboto', sans-serif;
    font-weight: ${({ weight = 'regular' }) => weightList[weight]};
    color: ${({ color = 'primary', theme }) => theme.palette.fonts[color]};
    text-align: ${({ textAlign = 'left' }) => textAlign};
`
