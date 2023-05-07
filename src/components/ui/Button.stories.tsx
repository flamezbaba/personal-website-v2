import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
import { JsxElement } from "typescript";

const meta: Meta<typeof Button> = {
  title: "component button",
  component: Button,
  argTypes: {
    variant: {
      control: {type: 'radio'},
      options: ['primary', 'secondary']
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "i am a button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "i am a second button",
    variant: "secondary",
  },
};

export const Another: Story = {
  render: (args) => <Button variant="secondary">i am another button</Button>
};

