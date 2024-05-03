import { Meta, StoryObj } from '@storybook/react';
import GitHubIcon from '.';

const meta: Meta<typeof GitHubIcon> = {
  component: GitHubIcon,
  title: 'UI Systems/Atoms/Icons/Github',
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
