import React, {useState} from "react";
import { PrimaryButton } from '@buttons/primary'
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimaryLineProgressBar } from "./primary-line-progress-bar"
import { PrimaryLineProgressBarProps } from "./types";

export default {
  title: "UI-kit/Loading/LineProgressBar",
  component: PrimaryLineProgressBar,
} as Meta;

const Template: Story<PrimaryLineProgressBarProps> = ({value = 0, ...args}) => {
  const [progress, setProgress] = useState(value),
        startProgress = () => {
            setInterval(() => {
                setProgress((prev) => prev + 10)
            }, 1000)
        }

  return <div>
      <PrimaryLineProgressBar {...args} value={progress} />
      <br/>
      <PrimaryButton label='start process' onClick={startProgress} />
  </div>
};

export const Primary = Template.bind({});
Primary.args = {value: 0, maxValue: 200};
