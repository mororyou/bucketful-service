import { Meta, StoryObj } from '@storybook/react';
import DiscordIcon from '.';

const meta: Meta<typeof DiscordIcon> = {
  component: DiscordIcon,
  title: 'UI Systems/Atoms/Icons/Discord',
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
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
