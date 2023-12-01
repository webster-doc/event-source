import React, {FC} from "react";
import { startDeg } from "./const"
import {ProgressCircle, PieceWrapper, MovingHalf, FilledHalf, ContentWrapper, SuccessFilledCircle} from './styles'

import { PrimaryCircleProgressBarProps } from './types'


export const PrimaryCircleProgressBar:FC<PrimaryCircleProgressBarProps> = ({ value = 0, maxValue = 100, className, render, ...props }) => {
    const percent = (value * 100) / maxValue,
          isHalfCircleFilled = percent >= 50,
          isFullCircleFilled = percent >= 100,
          deg = isFullCircleFilled ? 360 + startDeg : (360 * value) / maxValue + startDeg,
          content = render && render({isHalfCircleFilled, isFullCircleFilled, value, percent, maxValue})

    return (
        <ProgressCircle {...props} >
            <SuccessFilledCircle isVisible={isFullCircleFilled} />
            <PieceWrapper className={isHalfCircleFilled ? 'is-half-circle-filled' : ''} >
                <MovingHalf style={{transform: `rotate(${deg}deg)`}} />
                <FilledHalf />
            </PieceWrapper>
            <ContentWrapper>
                {content || <span>{percent}%</span>}
            </ContentWrapper>
        </ProgressCircle>
)};