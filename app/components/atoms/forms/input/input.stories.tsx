import { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'UI Systems/Atoms/Forms/Input',
  tags: ['autodocs'],
  args: {
    type: 'text',
    placeholder: '',
    className: '',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'file', 'password', 'email', 'number', 'tel', 'url'],
    },
    placeholder: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Placeholder',
  },
};

export const File: Story = {
  args: {
    type: 'file',
    placeholder: 'Placeholder',
  },
};
