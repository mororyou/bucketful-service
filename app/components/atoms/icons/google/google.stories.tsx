import { Meta, StoryObj } from '@storybook/react';
import GoogleIcon from '.';

const meta: Meta<typeof GoogleIcon> = {
  component: GoogleIcon,
  title: 'UI Systems/Atoms/Icons/Google',
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
