import React, {FC} from "react";
import {Wrapper, LineProgressBar, ProgressLine, ContentWrapper, Hint } from './styles'

import { PrimaryLineProgressBarProps } from './types'


export const PrimaryLineProgressBar:FC<PrimaryLineProgressBarProps> = ({ value = 0, maxValue = 100, className, render, ...props }) => {
    const percent = (value * 100) / maxValue,
          isFullLineFilled = percent >= 100,
          content = render && render({isFullLineFilled, value, percent, maxValue})

    return (
        <Wrapper {...props} >
            <LineProgressBar >
                <ProgressLine style={{transform: `translateX(${percent >= 100 ? 100 : percent}%)`}} isFullLineFilled={isFullLineFilled} />
            </LineProgressBar>
            <ContentWrapper>
                {content || <Hint>{percent}%</Hint>}
            </ContentWrapper>
        </Wrapper>
)};