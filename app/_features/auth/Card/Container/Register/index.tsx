import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { Form, useActionData } from '@remix-run/react';
import { Button } from '~app/components/atoms/forms/button';
import { CardContent } from '~app/components/molecules/card';
import ErrorLabels from '~app/components/molecules/forms/errors';
import InputWithLabel from '~app/components/molecules/forms/input-with-label';
import PasswordWithLabel from '~app/components/molecules/forms/password-with-label';
import { useIsPending } from '~app/hooks/useIsPending';
import { action } from '~app/routes/_auth.register/route';
import { AuthRegisterValidation } from '~com/validations/auth/register';

export default function AuthCardRegisterContainer() {
  const isPending = useIsPending();
  const actionData = useActionData<typeof action>();
  const [form, { name, email, password, confirmPassword }] = useForm({
    id: 'auth-register-form',
    lastResult: actionData,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: AuthRegisterValidation });
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onBlur',
  });

  return (
    <Form method="POST" {...getFormProps(form)}>
      <CardContent className="space-y-4 pb-0">
        <div>
          <InputWithLabel
            id="name"
            type="text"
            label="Name"
            placeholder="ニックネーム"
            required={true}
            props={{ ...getInputProps(name, { type: 'text' }) }}
          />
          {name.errors && <ErrorLabels errors={name.errors} />}
        </div>

        <div>
          <InputWithLabel
            id="email"
            type="email"
            label="Email"
            placeholder="John Doe"
            required={true}
            props={{ ...getInputProps(email, { type: 'email' }) }}
          />
          {email.errors && <ErrorLabels errors={email.errors} />}
        </div>

        <div>
          <PasswordWithLabel
            id="password"
            label="Password"
            placeholder="Enter your password"
            props={{ ...getInputProps(password, { type: 'password' }) }}
          />
          {password.errors && <ErrorLabels errors={password.errors} />}
        </div>

        <div>
          <PasswordWithLabel
            id="confirmPassword"
            label="Confirm Password"
            placeholder="Enter your password again"
            props={{ ...getInputProps(confirmPassword, { type: 'password' }) }}
          />
          {confirmPassword.errors && (
            <ErrorLabels errors={confirmPassword.errors} />
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isPending}
          value="user-pass"
          name="_action"
        >
          {isPending ? '登録中...' : '登録'}
        </Button>
      </CardContent>
    </Form>
  );
}
