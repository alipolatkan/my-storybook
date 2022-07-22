import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Spinner } from "../components/Spinner";

export default {
  title: "UI Components/Spinner",
  component: Spinner,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Basic = Template.bind({});
