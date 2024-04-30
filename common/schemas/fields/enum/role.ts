import { z } from 'zod';

export const roles = ['guest', 'client', 'demo', 'developer', 'admin'] as const;

export const zRoles = z.enum(roles);
