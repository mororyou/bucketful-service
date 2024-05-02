import { Input } from '~app/components/atoms/forms/input';
import { Label } from '~app/components/atoms/forms/label';

export default function InputWithLabel({
  id,
  label,
  placeholder,
  type = 'text',
  className = '',
  required = false,
  inputClassName = '',
  labelClassName = '',
  onChange,
  props,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  className?: string;
  required?: boolean;
  inputClassName?: string;
  labelClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div className={`space-y-2 ${className}`}>
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
}
