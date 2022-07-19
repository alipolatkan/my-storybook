import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components/Button/Button";

export default {
  title: "Form Elements/Button",
  component: Button,
  argTypes: {
    onClick: { action: "Button Component onClick event" },
  },
} as ComponentMeta<typeof Button>;

export const WithChild: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <span>Custom Button</span>
  </Button>
);

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: "Button",
};

export const IntentPrimary = Template.bind({});
IntentPrimary.args = {
  text: "Button",
};

export const IntentSecondary = Template.bind({});
IntentSecondary.args = {
  text: "Button",
  intent: "secondary",
};

export const IntentSuccess = Template.bind({});
IntentSuccess.args = {
  text: "Button",
  intent: "success",
};

export const IntentWarning = Template.bind({});
IntentWarning.args = {
  text: "Button",
  intent: "warning",
};

export const IntentDanger = Template.bind({});
IntentDanger.args = {
  text: "Button",
  intent: "danger",
};

export const IntentInfo = Template.bind({});
IntentInfo.args = {
  text: "Button",
  intent: "info",
};

export const VariantOutline = Template.bind({});
VariantOutline.args = {
  text: "Button",
  variant: "outline",
};

export const VariantGhost = Template.bind({});
VariantGhost.args = {
  text: "Button",
  variant: "ghost",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  size: "lg",
  text: "Button",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  size: "md",
  text: "Button",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  size: "sm",
  text: "Button",
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  text: "Button",
  loading: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: "Button",
  icon: "checkmark",
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Button",
  disabled: true,
};

export const JustIcon = Template.bind({});
JustIcon.args = {
  variant: "icon",
  icon: "clear",
};
