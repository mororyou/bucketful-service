import bcrypt from 'bcrypt';
import getUserDataService from '~api/services/produce-public/user/getDataService';
import registerUserService from '~api/services/produce-public/user/registerService';
import { AuthUser, Providers } from '~com/schemas/types/user';

export async function registerMailAccount({
  name,
  email,
  password,
  confirmPassword,
  provider,
  avator = '/images/avator/default.png',
}: {
  name: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
  confirmPassword: FormDataEntryValue | null;
  provider: Providers;
  avator?: FormDataEntryValue | null;
}): Promise<AuthUser | undefined> {
  try {
    if (!name || !email || !password || !confirmPassword)
      throw new Error('全ての項目を入力してください。');

    if (password !== confirmPassword)
      throw new Error('パスワードが一致しません。');

    // SETP1: メールアドレスが既に登録されているか確認
    const exists = await getUserDataService({ email: String(email) });
    if (exists) {
      if (exists.leave) {
        throw new Error('退会済みユーザーです。');
      } else {
        throw new Error('既に登録されているメールアドレスです。');
      }
    }

    // SETP2: ユーザー登録
    const hashPassword = await bcrypt.hash(String(password), 12);
    const user = await registerUserService({
      name: String(name),
      email: String(email),
      password: hashPassword,
      avator: String(avator),
      provider,
      role: 'guest',
    });

    return user;
  } catch (error: unknown) {
    throw new Error('400_ERROR - ユーザー登録に失敗しました。');
  }
}
