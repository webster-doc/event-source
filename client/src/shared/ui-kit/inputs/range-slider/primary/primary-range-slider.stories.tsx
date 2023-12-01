import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimaryRangeSlider } from "./primary-range-slider"
import { PrimaryRangeSliderProps } from "./types";

export default {
  title: "UI-kit/Inputs/RangeSlider/Primary",
  component: PrimaryRangeSlider,
} as Meta;

const Template: Story<PrimaryRangeSliderProps> = (args) => <>
  <PrimaryRangeSlider {...args} renderTooltip={(value) => value + ' sec'} />
</>;

export const primaryRangeSlider = Template.bind({});
primaryRangeSlider.args = { label: "Button", sizeMod: "md", mod: 'primary', disabled: false };