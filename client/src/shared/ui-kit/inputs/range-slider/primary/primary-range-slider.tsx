import React, {FC, useState, ChangeEvent} from "react";
import { PrimaryRangeSliderProps } from "./types"
import {Wrapper, RangeInput, ControlsWrapper, Control, Rail, Line, ControlTooltip} from "./styles"
import {Text} from '@typography'

/**
 * Primary UI component for user interaction
 */
export const PrimaryRangeSlider:FC<PrimaryRangeSliderProps> = ({
  size = "md",
  mod = 'primary',
  label,
  name= 'radio',
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  renderTooltip,
  ...props
})  => {
  const [rangeValue, setRangeValue] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newValue = Number(e.target.value);
    setRangeValue(newValue)
    // onChange({ min: newMinVal, max: maxValue });
  };

  const minPos = ((rangeValue - Number(min)) / (Number(max) - Number(min))) * 100;

  return (
    <Wrapper>
        <ControlsWrapper>
          <Rail>
            <Line style={{ left: '0', right: `${100 - minPos}%` }} />
          </Rail>
          <Control style={{left: `${minPos}%`}} >
            <ControlTooltip>
              {renderTooltip ? renderTooltip(rangeValue) : <Text>{rangeValue}</Text>}
            </ControlTooltip>
          </Control>
        </ControlsWrapper>
        <RangeInput
            type="range"
            name={name}
            value={rangeValue}
            min={min}
            max={max}
            step={step}
            onChange={handleChange}
        />
    </Wrapper>
        )
};