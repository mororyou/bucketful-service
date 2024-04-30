import { z } from 'zod';

export const sex = ['man', 'woman', 'not-set'] as const;

export const zSex = z.enum(sex);
