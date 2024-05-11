import { ChangeEvent, InputHTMLAttributes, forwardRef } from 'react';
import { Input } from '~app/components/atoms/forms/input';
import { Label } from '~app/components/atoms/forms/label';

export interface InputWithLabelProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  className?: string;
  required?: boolean;
  inputClassName?: string;
  labelClassName?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  props?: InputHTMLAttributes<HTMLInputElement>;
}

export const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  (
    {
      id,
      label,
      type,
      placeholder,
      className = '',
      required = false,
      inputClassName = '',
      labelClassName = '',
      onChange,
      props,
    },
    ref,
  ) => {
    return (
      <div className={`space-y-2 ${className}`} ref={ref}>
        <Label className={`${labelClassName}`} htmlFor={id}>
          {label}
        </Label>
        <Input
          id={id}
          required={required}
          placeholder={placeholder}
          type={type}
          className={`${inputClassName}`}
          onChange={onChange}
          {...props}
        />
      </div>
    );
  },
);

InputWithLabel.displayName = 'InputWithLabel';
