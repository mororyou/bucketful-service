import { Meta, StoryObj } from '@storybook/react';
import DiscordIcon from '~app/components/atoms/icons/discord';
import FacebookIcon from '~app/components/atoms/icons/facebook';
import GoogleIcon from '~app/components/atoms/icons/google';
import ButtonWithIcon from '.';

const meta: Meta<typeof ButtonWithIcon> = {
  component: ButtonWithIcon,
  title: 'UI Systems/Molecules/Form/Button/Button-With-Icon',
  tags: ['autodocs'],
  args: {
    btnClassName: '',
    label: 'Sign up with Google',
    variant: 'outline',
  },
  argTypes: {
    btnClassName: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonWithIcon>;

export const Default: Story = {
  args: {
    label: 'Sign up with Google',
    btnClassName: 'w-full',
    leftIcon: <GoogleIcon className="mr-2 h-4 w-4" />,
    rightIcon: <GoogleIcon className="ml-2 h-4 w-4" />,
  },
};

export const Google: Story = {
  args: {
    label: 'Sign up with Google',
    btnClassName: 'w-full',
    variant: 'outline',
    leftIcon: <GoogleIcon className="mr-2 h-4 w-4" />,
  },
};

export const Discord: Story = {
  args: {
    label: 'Sign up with Discord',
    btnClassName: 'w-full',
    variant: 'default',
    leftIcon: <DiscordIcon className="mr-2 h-4 w-4" />,
  },
};

export const Facebook: Story = {
  args: {
    label: 'Sign up with Facebook',
    btnClassName: 'w-full bg-blue-900 hover:bg-blue-800',
    variant: 'default',
    leftIcon: <FacebookIcon className="mr-2 h-4 w-4" fill="#fff" />,
  },
};
