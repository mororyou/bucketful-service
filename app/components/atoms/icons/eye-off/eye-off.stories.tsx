import { Meta, StoryObj } from '@storybook/react';
import EyeOffIcon from '.';

const meta: Meta<typeof EyeOffIcon> = {
  component: EyeOffIcon,
  title: 'UI Systems/Atoms/Icons/EyeOffIcon',
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'h-auto w-5',
  },
};
