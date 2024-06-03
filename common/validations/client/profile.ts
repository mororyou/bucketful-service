import { z } from 'zod';
import { IMAGE_TYPES, MAX_IMAGE_SIZE } from '~com/constants/configs';
import { sizeInMB } from '~com/libs/size';

export const ProfileEditValidation = z.object({
  name: z
    .string({ required_error: 'ニックネームは必須項目です。' })
    .min(2, 'ニックネームは２文字以上で入力してください。'),
  accountId: z
    .string({ required_error: 'アカウントIDは必須項目です。' })
    .min(4, 'アカウントIDは４文字以上で入力してください。'),
  avator: z
    .custom<FileList>()
    .transform((file) => file[0])
    .refine((file) => sizeInMB(file.size) <= MAX_IMAGE_SIZE, {
      message: 'ファイルサイズは最大5MBです',
    })
    .refine((file) => IMAGE_TYPES.includes(file.type), {
      message: '.jpg,pngのみ可能です',
    }),
  birthday: z
    .string({ required_error: '生年月日は必須項目です。' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, '生年月日はYYYY-MM-DD形式で入力'),
});
