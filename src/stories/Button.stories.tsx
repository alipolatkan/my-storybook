import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components/Button/Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

export const WithChild: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <span>Custom Button</span>
  </Button>
);

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  intent: "secondary",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  label: "Button",
  loading: true,
};
