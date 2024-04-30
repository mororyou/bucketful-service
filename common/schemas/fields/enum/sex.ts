import { z } from 'zod';

export const sex = ['men', 'women', 'not-set'] as const;

export const zSex = z.enum(sex);
