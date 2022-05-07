import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Alert } from "../components/Alert";

export default {
  title: "UI Components/Alert",
  component: Alert,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  message: "Message Title",
  description: "Message Description",
};

export const Closable = Template.bind({});
Closable.args = {
  message: "Message Title",
  description: "Message Description",
  closable: true,
};

export const Success = Template.bind({});
Success.args = {
  message: "Message Title",
  description: "Message Description",
  intent: "success",
};

export const Error = Template.bind({});
Error.args = {
  message: "Message Title",
  description: "Message Description",
  intent: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
  message: "Message Title",
  description: "Message Description",
  intent: "warning",
};

export const Info = Template.bind({});
Info.args = {
  message: "Message Title",
  description: "Message Description",
  intent: "info",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  message: "Message Title",
  description: "Message Description",
  intent: "success",
  icon: "check",
  closable: true,
};
