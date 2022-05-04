import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components/Button/Button";

export default {
  title: "UI Components/Button",
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

export const IntentPrimary = Template.bind({});
IntentPrimary.args = {
  label: "Button",
};

export const IntentSecondary = Template.bind({});
IntentSecondary.args = {
  label: "Button",
  intent: "secondary",
};

export const IntentSuccess = Template.bind({});
IntentSuccess.args = {
  label: "Button",
  intent: "success",
};

export const IntentWarning = Template.bind({});
IntentWarning.args = {
  label: "Button",
  intent: "warning",
};

export const IntentDanger = Template.bind({});
IntentDanger.args = {
  label: "Button",
  intent: "danger",
};

export const IntentInfo = Template.bind({});
IntentInfo.args = {
  label: "Button",
  intent: "info",
};

export const VariantOutline = Template.bind({});
VariantOutline.args = {
  label: "Button",
  variant: "outline",
};

export const VariantGhost = Template.bind({});
VariantGhost.args = {
  label: "Button",
  variant: "ghost",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  size: "lg",
  label: "Button",
};

export const SizeDefault = Template.bind({});
SizeDefault.args = {
  label: "Button",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  size: "md",
  label: "Button",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  size: "sm",
  label: "Button",
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  label: "Button",
  loading: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Button",
  icon: "checkmark",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Button",
  disabled: true,
};

export const JustIcon = Template.bind({});
JustIcon.args = {
  variant: "icon",
  icon: "clear"
};
