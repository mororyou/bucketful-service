import { z } from 'zod';

export const providers = [
  'email',
  'google',
  'github',
  'discord',
  'line',
  'facebook',
] as const;

export const zProviders = z.enum(providers);
