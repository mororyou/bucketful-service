import { FormStrategy } from 'remix-auth-form';
import { loginMailAccount } from '../providers/mail/login';

const formStrategy = new FormStrategy(async ({ form }) => {
  const email = form.get('email');
  const password = form.get('password');

  if (!email || !password)
    throw new Error('メールアドレスとパスワードを入力してください。');

  const user = await loginMailAccount(email, password);

  return user;
});

export default formStrategy;
