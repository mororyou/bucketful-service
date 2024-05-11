import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { Form, Link, useActionData } from '@remix-run/react';
import { Button } from '~app/components/atoms/forms/button';
import { CardContent } from '~app/components/molecules/card';
import ErrorLabels from '~app/components/molecules/forms/errors';
import { InputWithLabel } from '~app/components/molecules/forms/input-with-label';
import { PasswordWithLabel } from '~app/components/molecules/forms/password-with-label';
import { useIsPending } from '~app/hooks/useIsPending';
import { action } from '~app/routes/_auth/login/route';
import { AuthLoginValidation } from '~com/validations/auth/login';

export default function AuthCardLoginContainer() {
  const isPending = useIsPending();
  const actionData = useActionData<typeof action>();
  const [form, { email, password }] = useForm({
    id: 'auth-login-form',
    lastResult: actionData,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: AuthLoginValidation });
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onBlur',
  });

  return (
    <Form method="POST" {...getFormProps(form)}>
      <CardContent className="space-y-4 pb-0">
        <div>
          <InputWithLabel
            id="email"
            type="email"
            label="Email"
            placeholder="bucketful@example.com"
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

        <Link className="flex justify-end text-sm underline" to="#">
          パスワードを忘れた方はこちら
        </Link>

        <Button
          className="w-full"
          type="submit"
          disabled={isPending}
          value="user-pass"
          name="_action"
        >
          {isPending ? 'ログイン中...' : 'ログイン'}
        </Button>
      </CardContent>
    </Form>
  );
}
