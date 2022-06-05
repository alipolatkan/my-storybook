import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Navigation } from "../components/Navigation";

export default {
  title: "UI Components/Navigation",
  component: Navigation,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: {
    // active: false,
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = ({ ...args }) => (
  <Navigation {...args}>
    <Navigation.Item>Item 1</Navigation.Item>
    <Navigation.Item>Item 2</Navigation.Item>
    <Navigation.Item>Item 3</Navigation.Item>
    <Navigation.Item>Item 4</Navigation.Item>
    <Navigation.Item>Item 5</Navigation.Item>
  </Navigation>
);

export const Basic = Template.bind({});
Basic.args = {};

export const DefaultActive = Template.bind({});
DefaultActive.args = {
  defaultActiveKey: 3,
};

export const Vertical = Template.bind({});
Vertical.args = {
  displayType: "vertical",
};
