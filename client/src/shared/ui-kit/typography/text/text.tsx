import React from 'react'
import styled from 'styled-components'
import {sizeList, weightList} from "./const"
import { TextProps } from './types'

export const Text = styled.p<TextProps>`
    font-family: 'Roboto', sans-serif;
    font-weight: ${({ weight = 'regular' }) => weightList[weight]};
    color: ${({ color = 'primary', theme }) => theme.palette.fonts[color]};
    text-align: ${({ textAlign = 'left' }) => textAlign};
  
    cursor: ${({ isPointer = false }) => (isPointer ? 'pointer' : 'auto')};

    ${({ size = 'md' }) => sizeList[size]};
`
