import { Meta, StoryObj } from '@storybook/react';
import FacebookIcon from '.';

const meta: Meta<typeof FacebookIcon> = {
  component: FacebookIcon,
  title: 'UI Systems/Atoms/Icons/Facebook',
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
