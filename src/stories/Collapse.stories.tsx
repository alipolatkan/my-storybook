import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import { Collapse } from "../components/Collapse";
import { Panel } from "../components/Collapse";

export default {
  title: "UI Components/Collapse",
  component: Collapse,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Collapse>;

export const Basic: ComponentStory<typeof Collapse> = (args) => (
  <Collapse {...args}>
    {[1, 2, 3, 4, 5].map((index) => (
      <Panel key={index}>
        <Panel.Header>Content Header {index}</Panel.Header>
        <Panel.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          soluta, perspiciatis deserunt quo incidunt beatae numquam praesentium
          ab nihil autem. Corrupti quae temporibus consequatur optio ex quam
          adipisci rem iste.
        </Panel.Content>
      </Panel>
    ))}
  </Collapse>
);

export const disabledActivePanel: ComponentStory<typeof Collapse> = (args) => (
  <Collapse {...args}>
    {[1, 2, 3, 4, 5].map((index) => (
      <Panel key={index}>
        <Panel.Header>Content Header {index}</Panel.Header>
        <Panel.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          soluta, perspiciatis deserunt quo incidunt beatae numquam praesentium
          ab nihil autem. Corrupti quae temporibus consequatur optio ex quam
          adipisci rem iste.
        </Panel.Content>
      </Panel>
    ))}
  </Collapse>
);

disabledActivePanel.args = {
  accordion: true,
  defaultActive: 2,
  disabledActivePanel: true,
};

export const WithDefaultPanel: ComponentStory<typeof Collapse> = (args) => (
  <Collapse {...args}>
    {[1, 2, 3, 4, 5].map((index) => (
      <Panel key={index}>
        <Panel.Header>Content Header {index}</Panel.Header>
        <Panel.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          soluta, perspiciatis deserunt quo incidunt beatae numquam praesentium
          ab nihil autem. Corrupti quae temporibus consequatur optio ex quam
          adipisci rem iste.
        </Panel.Content>
      </Panel>
    ))}
  </Collapse>
);

WithDefaultPanel.args = {
  defaultActive: 2,
};

export const WithIcon: ComponentStory<typeof Collapse> = (args) => (
  <Collapse {...args}>
    {[1, 2, 3, 4, 5].map((index) => (
      <Panel key={index}>
        <Panel.Header>Content Header {index}</Panel.Header>
        <Panel.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          soluta, perspiciatis deserunt quo incidunt beatae numquam praesentium
          ab nihil autem. Corrupti quae temporibus consequatur optio ex quam
          adipisci rem iste.
        </Panel.Content>
      </Panel>
    ))}
  </Collapse>
);

WithIcon.args = {
  icon: true,
};

export const OnPanelChange: ComponentStory<typeof Collapse> = (args) => (
  <Collapse {...args}>
    {[1, 2, 3, 4, 5].map((index) => (
      <Panel key={index}>
        <Panel.Header>Content Header {index}</Panel.Header>
        <Panel.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          soluta, perspiciatis deserunt quo incidunt beatae numquam praesentium
          ab nihil autem. Corrupti quae temporibus consequatur optio ex quam
          adipisci rem iste.
        </Panel.Content>
      </Panel>
    ))}
  </Collapse>
);

OnPanelChange.args = {
  onPanelChange: (key, index, state) => {
    console.log("status", {
      key,
      index,
      state,
    });
  },
};
