import { Meta } from '@storybook/react';
import { Label } from '.';

const meata: Meta<typeof Label> = {
  component: Label,
  title: 'UI Systems/Atoms/Forms/Label',
  tags: ['autodocs'],
  args: {
    className: '',
  },
  argTypes: {
    className: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
};

export default meata;

type Story = typeof meata;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};
