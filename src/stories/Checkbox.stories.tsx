import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "../components/Checkbox";

export default {
  title: "UI Components/Checkbox",
  component: Checkbox,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  id: "1",
  text: "Check me out!",
};

export const Checked = Template.bind({});
Checked.args = {
  id: "2",
  text: "Check me out!",
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "3",
  text: "Check me out!",
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  id: "4",
  text: "Check me out!",
  error: true,
  errorMessage: "Something is wrong!",
};
