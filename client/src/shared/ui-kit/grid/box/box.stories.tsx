import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Box } from "./box"
import { BoxProps } from "./types";
import {getStyledComponentPropsForDisable} from "@story-book-utilities";

export default {
  title: "UI-kit/Grid",
  component: Box,
  argTypes: {
    ...getStyledComponentPropsForDisable(),
    flexDirection: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Col = ({children}) => (<div style={{border: '1px solid black'}} >{children}</div>)

const Template: Story<BoxProps> = (args) => <div style={{height: '300px', border: '1px solid red'}} >
  <Box {...args} style={{border: '1px solid blue'}} >
    <Col>1</Col>
    <Col>2</Col>
    <Col>3</Col>
  </Box>
</div>;

export const box = Template.bind({});
box.args = { isFluid: true, isFullHeight: true, isFullWidth: false, flexDirection: 'row' };