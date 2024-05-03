import bcrypt from 'bcrypt';
import { AuthorizationError } from 'remix-auth';
import getUserDataService from '~api/services/produce-public/user/getDataService';
import { AuthUser, Providers } from '~com/schemas/types/user';

export async function loginMailAccount(
  email: FormDataEntryValue,
  password: FormDataEntryValue,
  provider: Providers,
): Promise<AuthUser | undefined> {
  try {
    const user = await getUserDataService({
      email: String(email),
      provider,
    });

    if (!user) {
      throw new AuthorizationError(
        'メールアドレスまたはパスワードの入力に誤りがあります。',
      );
    }

    if (user.leave) throw new AuthorizationError('退会済みユーザーです。');

    const passwordMatch = await bcrypt.compare(String(password), user.password);

    if (!passwordMatch) {
      throw new AuthorizationError('パスワードが一致しません。');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;

    return userWithoutPassword;
  } catch (error: unknown) {
    console.error(error);
  }
}
