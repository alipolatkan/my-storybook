import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Radio } from "../components/Radio";

export default {
  title: "Form Elements/Radio",
  component: Radio,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  id: "radio",
  text: "Click me out!",
  name: "radio",
};

export const Checked = Template.bind({});
Checked.args = {
  id: "radio",
  text: "Click me out!",
  name: "radio",
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "radio",
  text: "Click me out!",
  name: "radio",
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  id: "4",
  text: "Click me out!",
  status: "danger",
  statusMessage: "Something is wrong!",
};
