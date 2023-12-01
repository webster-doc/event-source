import React, {useState} from "react";
import { PrimaryButton } from '@buttons/primary'
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimaryCircleProgressBar } from "./primary-circle-progress-bar"
import { PrimaryCircleProgressBarProps } from "./types";

export default {
  title: "UI-kit/Loading/CircleProgressBar",
  component: PrimaryCircleProgressBar,
} as Meta;

const Template: Story<PrimaryCircleProgressBarProps> = ({value = 0, ...args}) => {
  const [progress, setProgress] = useState(value),
        startProgress = () => {
            setInterval(() => {
                setProgress((prev) => prev + 10)
            }, 1000)
        }

  return <div>
      <PrimaryCircleProgressBar {...args} value={progress} />
      <br/>
      <PrimaryButton label='start process' onClick={startProgress} />
  </div>
};

export const Primary = Template.bind({});
Primary.args = {value: 0, maxValue: 200};
