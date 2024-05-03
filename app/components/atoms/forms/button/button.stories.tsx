import { Meta, StoryObj } from '@storybook/react';
import GitHubIcon from '~app/components/atoms/icons/github';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'UI Systems/Atoms/Forms/Button',
  tags: ['autodocs'],
  args: {
    className: '',
    variant: 'default',
    disabled: false,
    size: 'default',
  },
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const IconButton: Story = {
  args: {
    children: <GitHubIcon color="#fff" />,
    variant: 'default',
    size: 'icon',
  },
};
