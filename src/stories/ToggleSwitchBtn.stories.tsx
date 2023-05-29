import type { StoryObj, Meta } from '@storybook/react';

import ToggleSwitchBtn from '../components/ToggleSwitchBtn/ToggleSwitchBtn';

const meta: Meta<typeof ToggleSwitchBtn> = {
  title: 'Example/ToggleSwitch',
  component: ToggleSwitchBtn
};

export default meta;

type Story = StoryObj<typeof ToggleSwitchBtn>;

export const Default: Story = {
  args: {
    checked: false,
    description: 'Example description for what is being toggled',
    disabled: false,
    hideLabel: false,
    label: 'On/Off Label',
    reverse: false
  }
};
