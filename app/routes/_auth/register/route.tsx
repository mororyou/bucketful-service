import { parseWithZod } from '@conform-to/zod';
import { ActionFunctionArgs, LoaderFunctionArgs, json } from '@remix-run/node';
import { authenticator } from '~api/services/auth/auth.server';
import { registerMailAccount } from '~api/services/auth/providers/mail/register';
import AuthRegistgerContainer from '~app/components/pages/auth/register';
import {
  FAILURE_REDIRECT_REGISTER_URL,
  SUCCESS_REDIRECT_URL,
} from '~com/constants/configs';
import { AuthRegisterValidation } from '~com/validations/auth/register';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.clone().formData();
  const action = String(formData.get('_action'));

  if (action === 'user-pass') {
    const submission = parseWithZod(formData, {
      schema: AuthRegisterValidation,
    });
    if (submission.status !== 'success')
      return json(submission.reply(), { status: 400 });

    await registerMailAccount({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
      provider: 'email',
    });
  }

  return await authenticator.authenticate(action, request, {
    successRedirect: SUCCESS_REDIRECT_URL,
    failureRedirect: FAILURE_REDIRECT_REGISTER_URL,
  });
}

export async function loader({ request }: LoaderFunctionArgs) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: SUCCESS_REDIRECT_URL,
  });
}

export default function AuthRegisterRoute() {
  return <AuthRegistgerContainer />;
}
