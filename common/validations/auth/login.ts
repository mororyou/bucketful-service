import { z } from 'zod';

export const AuthLoginValidation = z.object({
  email: z
    .string({
      required_error: 'メールアドレスは必須項目です。',
    })
    .email('メールアドレスの形式で入力してください。'),
  password: z
    .string({ required_error: 'パスワードは必須項目です。' })
    .min(8, 'パスワードは８文字以上で入力してください。'),
});
