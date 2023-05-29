import type { StoryObj, Meta } from '@storybook/react';

import Button from '../components/Button/Button';

const modifiers = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary'
};

const sizes = {
  l: 'large',
  m: 'medium',
  s: 'small'
};

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    modifier: {
      options: Object.values(modifiers),
      control: { type: 'select' }
    },
    size: {
      options: Object.values(sizes),
      control: { type: 'select' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

// const Template = (args) => <Button {...args} />;
// export const Primary = Template.bind({});

export const Primary: Story = {
  args: {
    modifier: 'primary',
    label: 'Example Button'
  }
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    modifier: 'secondary',
    label: 'Example Button'
  }
};
