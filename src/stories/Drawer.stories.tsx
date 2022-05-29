import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Drawer } from "../components/Drawer";

export default {
  title: "UI Components/Drawer",
  component: Drawer,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: {
    // active: false,
  },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = ({ ...args }) => (
  <Drawer {...args}>
    <div>Drawer Child Nodes</div>
  </Drawer>
);

export const Basic = Template.bind({});
Basic.args = {
  active: false,
  onEnter: () => console.log("on Handle Enter!"),
  onClose: () => console.log("on Handle Close!"),
};
