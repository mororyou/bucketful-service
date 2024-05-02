import { z } from 'zod';

export const AuthRegisterValidation = z
  .object({
    name: z
      .string({ required_error: 'ニックネームは必須項目です。' })
      .min(2, 'ニックネームは２文字以上で入力してください。'),
    email: z
      .string({ required_error: 'メールアドレスは必須項目です。' })
      .email('メールアドレス形式で入力してください。'),
    password: z
      .string({ required_error: 'パスワードは必須項目です。' })
      .min(8, 'パスワードは８文字以上で入力してください。')
      .regex(
        /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
        'パスワードは半角英数字混合で入力してください。',
      ),
    confirmPassword: z.string({
      required_error: '確認用パスワードは必須項目です。',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'パスワードと確認用パスワードが一致しません。',
    path: ['confirmPassword'],
  });
