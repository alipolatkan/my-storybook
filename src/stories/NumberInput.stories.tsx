import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NumberInput } from "../components/NumberInput";

export default {
  title: "Form Elements/NumberInput",
  component: NumberInput,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args) => (
  <NumberInput {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Input Label",
  helperText: "Helper Text",
  disabled: true,
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  label: "Input Label",
  helperText: "Helper Text",
  defaultValue: 66,
  status: "warning",
  statusMessage: "test status message"
};

export const MinMaxValue = Template.bind({});
MinMaxValue.args = {
  label: "Input Label",
  helperText: "Min value = 0 | Max value = 10",
  minValue: 0,
  maxValue: 10,
  defaultValue: 5,
};

export const DecimalValue = Template.bind({});
DecimalValue.args = {
  label: "Input Label",
  helperText: "Decimal Value",
  defaultValue: 5.5,
  stepAmount: 0.5,
};
