import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimarySpinner } from "./primary-spinner"
import { SpinnerProps } from "./types";

export default {
  title: "UI-kit/Loading/Spinner",
  component: PrimarySpinner,
} as Meta;

const Template: Story<SpinnerProps> = (args) => <div>
  <PrimarySpinner {...args} />
</div>;

export const Primary = Template.bind({});
Primary.args = { size: "md" };