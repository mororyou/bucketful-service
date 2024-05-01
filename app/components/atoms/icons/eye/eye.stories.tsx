import { Meta, StoryObj } from '@storybook/react';
import EyeIcon from '.';

const meta: Meta<typeof EyeIcon> = {
  component: EyeIcon,
  title: 'UI Systems/Atoms/Icons/EyeIcon',
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
