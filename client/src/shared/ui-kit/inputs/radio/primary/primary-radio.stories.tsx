import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimaryRadio } from "./primary-radio"
import { PrimaryRadioProps } from "./types";

export default {
  title: "UI-kit/Inputs/Radio/Primary",
  component: PrimaryRadio,
} as Meta;

const Template: Story<PrimaryRadioProps> = (args) => <>
  <PrimaryRadio {...args} />
  <br/>
  <br/>
  <PrimaryRadio {...args} />
</>;

export const primaryRadio = Template.bind({});
primaryRadio.args = { label: "Button", size: "md", mod: 'primary', disabled: false, labelPosition: 'left' };