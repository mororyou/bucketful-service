import { forwardRef, useState } from 'react';
import { Button } from '~app/components/atoms/forms/button';
import { Input } from '~app/components/atoms/forms/input';
import { Label } from '~app/components/atoms/forms/label';
import EyeIcon from '~app/components/atoms/icons/eye';
import EyeOffIcon from '~app/components/atoms/icons/eye-off';

export interface PasswordWithLabelProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const PasswordWithLabel = forwardRef<
  HTMLInputElement,
  PasswordWithLabelProps
>(
  (
    {
      id,
      label,
      placeholder = 'Enter your password',
      className = '',
      inputClassName,
      labelClassName,
      onChange,
      props,
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div className={`${className} relative space-y-2`} ref={ref}>
        <div className="flex items-center">
          <Label htmlFor={id} className={`${labelClassName}`}>
            {label}
          </Label>
        </div>
        <Input
          id={id}
          type={showPassword ? 'text' : 'password'}
          className={`${inputClassName}`}
          placeholder={placeholder}
          required
          onChange={onChange}
          {...props}
        />
        <Button
          className="absolute bottom-1 right-1 h-7 w-7"
          size="icon"
          variant="ghost"
          type="button"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? (
            <EyeOffIcon className="h-4 w-4" />
          ) : (
            <EyeIcon className="h-4 w-4" />
          )}
          <span className="sr-only">Toggle password visibility</span>
        </Button>
      </div>
    );
  },
);

PasswordWithLabel.displayName = 'PasswordWithLabel';
