import { Button } from '~app/components/atoms/forms/button';

export default function ButtonWithIcon({
  label,
  value,
  form,
  name,
  btnClassName,
  variant = 'default',
  type = 'button',
  leftIcon,
  rightIcon,
}: {
  label: string;
  value: string;
  form: string;
  name: string;
  btnClassName: string;
  variant?: 'default' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}) {
  return (
    <Button
      className={btnClassName}
      variant={variant}
      form={form}
      name={name}
      type={type}
      value={value}
    >
      {leftIcon && leftIcon}
      {label}
      {rightIcon && rightIcon}
    </Button>
  );
}
