import { parseWithZod } from '@conform-to/zod';
import { ActionFunctionArgs, LoaderFunctionArgs, json } from '@remix-run/node';
import { authenticator } from '~api/services/auth/auth.server';
import AuthLoginContainer from '~app/components/pages/auth/login';
import {
  FAILURE_REDIRECT_LOGIN_URL,
  SUCCESS_REDIRECT_URL,
} from '~com/constants/configs';
import { AuthLoginValidation } from '~com/validations/auth/login';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.clone().formData();
  const action = String(formData.get('_action'));

  if (action === 'user-pass') {
    const submission = parseWithZod(formData, { schema: AuthLoginValidation });
    if (submission.status !== 'success') return json(submission.reply());
  }

  return await authenticator.authenticate(action, request, {
    successRedirect: SUCCESS_REDIRECT_URL,
    failureRedirect: FAILURE_REDIRECT_LOGIN_URL,
    context: { formData },
  });
}

export async function loader({ request }: LoaderFunctionArgs) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: SUCCESS_REDIRECT_URL,
  });
}

export default function AuthLoginRoute() {
  return <AuthLoginContainer />;
}
