import styled, {css} from 'styled-components'

import {SelectItemProps} from './../../../types'


export const SelectOption = styled.div<SelectItemProps>`
    padding: 5px;
    cursor: pointer;
    background: ${({ isActive, theme }) => isActive ? theme.palette.backgrounds.primary : theme.palette.colors.quinary};
`
